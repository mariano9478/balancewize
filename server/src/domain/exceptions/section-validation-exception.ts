/* eslint-disable @typescript-eslint/no-useless-constructor */
export default class SectionException extends Error {
  constructor(message: string) {
    super(message);
  }
}
