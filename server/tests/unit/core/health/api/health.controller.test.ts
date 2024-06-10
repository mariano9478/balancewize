import { Logger } from "@nestjs/common";
import { createMock, Mock } from "@tests/utils/mock";

describe("HealthController", () => {
  let logger: Mock<Logger>;

  beforeEach(() => {
    logger = createMock<Logger>();
  });

  describe.skip("run", () => {
    it("should return is healthy", () => {
      expect(logger.log).toHaveBeenCalledTimes(1);
    });
  });
});
