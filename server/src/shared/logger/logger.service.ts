import { Logger } from "@nestjs/common";

export default class LogService {
  private logger: Logger;
  constructor() {
    this.logger = new Logger();
  }

  info(message: string, context?: string, method?: string, path?: string) {
    this.logger.log(`[${context}] ${method ?? ""} ${path ?? ""} ${message}`);
  }
  debug(
    message: string,
    context?: string,
    method?: string,
    path?: string,
    data?: object,
  ) {
    this.logger.debug(
      data,
      `[${context}] ${method ?? ""} ${path ?? ""} ${message}`,
    );
  }

  error(message: string, context?: string, data = {}) {
    this.logger.error(data, `[${context}] ${message}`);
  }
}
