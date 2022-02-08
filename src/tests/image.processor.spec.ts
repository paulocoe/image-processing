import { ImageProcessor } from "../services/image.processor";
const imageProcessor = new ImageProcessor();

describe("Image processor", () => {
  describe("Resizing images", () => {
    it("Should resize image 'fjord' to size 430 x 230", async () => {
      const width = 430;
      const height = 230;
      const outputInfo = await imageProcessor.resizeImage(
        "fjord",
        width,
        height
      );

      expect(outputInfo).toBeTruthy();
      expect(outputInfo.width).toBe(width);
      expect(outputInfo.height).toBe(height);
      expect(outputInfo.format).toBe("jpeg");
    });
  });
});
