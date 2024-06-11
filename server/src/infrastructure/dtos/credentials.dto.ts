import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export default class CredentialsDto {
  @ApiProperty({ example: "john@gmail.com" })
  @IsEmail()
  email!: string;
  @ApiProperty({ example: "password" })
  @IsNotEmpty()
  password!: string;
}
