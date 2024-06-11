import { ApiProperty } from "@nestjs/swagger";

export class NotFoundResponse {
  @ApiProperty({ example: "Not Found" })
  message!: string;
  @ApiProperty({
    example: {
      statusCode: 404,
      message: "Not Found",
    },
  })
  error!: {
    statusCode: number;
    message: string;
  };
}

export class InvalidPasswordResponse {
  @ApiProperty({ example: "Invalid Password" })
  message!: string;
  @ApiProperty({
    example: {
      statusCode: 401,
      message: "Invalid Password",
    },
  })
  error!: {
    statusCode: number;
    message: string;
  };
}

export class EmailInUseResponse {
  @ApiProperty({ example: "Email In Use" })
  message!: string;
  @ApiProperty({
    example: {
      statusCode: 409,
      message: "Email In Use",
    },
  })
  error!: {
    statusCode: number;
    message: string;
  };
}

export class UnauthorizedResponse {
  @ApiProperty({ example: "Unauthorized" })
  message!: string;
  @ApiProperty({
    example: {
      statusCode: 401,
      message: "Unauthorized",
    },
  })
  error!: {
    statusCode: number;
    message: string;
  };
}

export class MissingDataResponse {
  @ApiProperty({ example: "Bad Request Exception" })
  message!: string;
  @ApiProperty({
    example: {
      statusCode: 400,
      message: ["phone should not be empty", "name should not be empty"],
    },
  })
  error!: {
    statusCode: number;
    message: string[];
  };
}
