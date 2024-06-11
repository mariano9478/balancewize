import { randomBytes, scrypt as _scrypt } from "node:crypto";
import { promisify } from "node:util";

import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import UserModel from "@src/domain/models/user.model";
import { UserRepository } from "@src/domain/ports/repositories/user.repository";
import UserDto from "@src/infrastructure/dtos/user.dto";
import { UserMapper } from "@src/infrastructure/mappers/user.mapper";

import { User, UserDocument } from "../entity/user.entity";

const scrypt = promisify(_scrypt);

@Injectable()
export default class UserRepositoryMongo implements UserRepository {
  constructor(
    @InjectModel(User.name)
    private readonly userRepository: Model<UserDocument>,
  ) {}

  async logIn(email: string, password: string): Promise<UserModel> {
    const user = await this.userRepository.findOne({ email });
    if (user) {
      // Hash the password parameter
      const [storedHash, salt] = user.password.split(".");
      const hash = (await scrypt(password, salt, 32)) as Buffer;
      // Compare the hashed password with the one stored in the database
      const passwordMatch = hash.toString("hex") === storedHash;
      if (passwordMatch) {
        // Passwords match, return the user model
        return UserMapper.toDomain(user);
      }
      throw new UnauthorizedException("Invalid password");
    }

    // User not found or password doesn't match
    throw new NotFoundException();
  }
  async signIn(user: UserDto): Promise<UserModel> {
    // Check if the user already exists
    const existingUser = await this.userRepository.findOne({
      email: user.email,
    });
    if (existingUser) {
      throw new UnauthorizedException("User already exists");
    }
    // Hash the password
    const salt = randomBytes(8).toString("hex");
    const hash = (await scrypt(user.password, salt, 32)) as Buffer;
    const hashedPassword = `${hash.toString("hex")}.${salt}`;

    // Create a new user document
    const newUser = new this.userRepository({
      ...user,
      password: hashedPassword,
    });

    // Save the user document
    await newUser.save();

    // Return the user model
    return UserMapper.toDomain(newUser);
  }
  async whoami(id: string): Promise<UserModel> {
    const user = await this.userRepository.findById(id);
    if (user) {
      return UserMapper.toDomain(user);
    }
    throw new NotFoundException();
  }
}
