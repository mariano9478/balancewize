import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export default class UserDto {
  @ApiProperty({ example: "john@gmail.com" })
  @IsEmail()
  email!: string;
  @ApiProperty({ example: "password" })
  @IsNotEmpty()
  password!: string;
  @ApiProperty({ example: "John Doe" })
  @IsNotEmpty()
  name!: string;
  @ApiProperty({ example: 1_234_567_890 })
  @IsNotEmpty()
  phone!: number;
}
