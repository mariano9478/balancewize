import { HttpException, HttpStatus } from "@nestjs/common";

export class ResponseDto<T> {
  public data?: T;
  public message!: string;
  public error!: string | object;

  constructor(data?: T) {
    this.data = data;
  }

  toSuccess(): ResponseDto<T> {
    this.message = "success";

    if (
      this.data instanceof Object &&
      "message" in this.data &&
      this.data.message
    ) {
      // eslint-disable-next-line @typescript-eslint/no-base-to-string
      this.message = this.data.message.toString();

      delete this.data.message;
    }

    return this;
  }

  toError(error: HttpException): HttpException {
    this.data = undefined;
    this.message = error.message;
    this.error =
      error.getResponse() === this.message ? error.name : error.getResponse();

    return error instanceof HttpException
      ? new HttpException(this, error.getStatus())
      : new HttpException(this, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
