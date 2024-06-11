import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Session,
  UnauthorizedException,
} from "@nestjs/common";
import {
  ApiBody,
  ApiCookieAuth,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
} from "@nestjs/swagger";

import LogInUserUseCase from "@src/application/usecases/user/log-in.usecase";
import SignInUserUseCase from "@src/application/usecases/user/sign-in.usecase";
import WhoAmIUseCase from "@src/application/usecases/user/who-am-i.usecase";
import {
  EmailInUseResponse,
  InvalidPasswordResponse,
  MissingDataResponse,
  NotFoundResponse,
  UnauthorizedResponse,
} from "@src/shared/swagger/responses/exceptions.response";
import UserResponse from "@src/shared/swagger/responses/user.response";

import CredentialsDto from "../dtos/credentials.dto";
import UserDto from "../dtos/user.dto";

@ApiCookieAuth()
@Controller("user")
export class UserContorller {
  constructor(
    private LogInUserCase: LogInUserUseCase,
    private SignInUserCase: SignInUserUseCase,
    private WhoAmICase: WhoAmIUseCase,
  ) {}

  @Post("/auth/login")
  @ApiOperation({ summary: "Log In with email and password" })
  @ApiBody({ type: CredentialsDto })
  @ApiOkResponse({ type: UserResponse })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    type: InvalidPasswordResponse,
  })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, type: NotFoundResponse })
  @HttpCode(HttpStatus.OK)
  public async logIn(
    @Body() body: CredentialsDto,
    @Session() session: any,
  ): Promise<unknown> {
    const user = await this.LogInUserCase.handler(body.email, body.password);
    session.userId = user._id;
    return user;
  }

  @Post("/auth/signin")
  @ApiOperation({ summary: "Sign In with email, password, name and phone" })
  @ApiBody({ type: UserDto })
  @ApiResponse({ status: HttpStatus.CREATED, type: UserResponse })
  @ApiResponse({ status: HttpStatus.CONFLICT, type: EmailInUseResponse })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, type: MissingDataResponse })
  @HttpCode(HttpStatus.CREATED)
  public async signIn(
    @Body() body: UserDto,
    @Session() session: any,
  ): Promise<unknown> {
    const user = await this.SignInUserCase.handler(body);
    session.userId = user._id;
    return user;
  }

  @Get("/auth/whoami")
  @ApiOperation({ summary: "Get the current user" })
  @ApiOkResponse({ type: UserResponse })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, type: UnauthorizedResponse })
  @HttpCode(HttpStatus.OK)
  public async whoAmI(@Session() session: any): Promise<unknown> {
    if (!session.userId) throw new UnauthorizedException();
    return this.WhoAmICase.handler(session.userId);
  }

  @Post("/auth/logout")
  @ApiOperation({ summary: "Log Out" })
  @ApiResponse({ status: HttpStatus.NO_CONTENT })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, type: UnauthorizedResponse })
  @HttpCode(HttpStatus.NO_CONTENT)
  public logOut(@Session() session: any): undefined {
    session.userId = undefined;
    return undefined;
  }
}
