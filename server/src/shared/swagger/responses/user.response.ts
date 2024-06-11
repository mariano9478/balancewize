import { ApiProperty } from "@nestjs/swagger";

class Data {
  @ApiProperty({ example: "john@gmail.com" })
  email!: string;
  @ApiProperty({ example: "password" })
  password!: string;
  @ApiProperty({ example: "John Doe" })
  name!: string;
  @ApiProperty({ example: 1_234_567_890 })
  phone!: number;
  @ApiProperty({ example: [] })
  accounts: Array<{ id: number; name: string }> = [];
}

export default class UserResponse {
  @ApiProperty({ type: Data })
  data!: Data;
  @ApiProperty({ example: "success" })
  message!: string;
}
