import { ImageProcessor } from "../services/image.processor";
const imageProcessor = new ImageProcessor();

describe("Image processor", () => {
  describe("Resizing images", () => {
    it("Should resize image 'fjord' to size 430 x 230", async () => {
      const width = 430;
      const height = 230;
      const result = await imageProcessor.resize("fjord", width, height);

      expect(result).toBeTruthy();
      expect(result.width).toBe(width);
      expect(result.height).toBe(height);
      expect(result.format).toBe("jpeg");
    });

    it("Should re-use resized image 'fjord' with size 430 x 230", async () => {
      const width = 430;
      const height = 230;
      await imageProcessor.resize("fjord", width, height);

      spyOn(imageProcessor, "resizeImage");
      const result = await imageProcessor.resize("fjord", width, height);

      expect(result).toBeTruthy();
      expect(result.width).toBe(width);
      expect(result.height).toBe(height);
      expect(result.format).toBe("jpeg");
      expect(imageProcessor.resizeImage).not.toHaveBeenCalled();
    });
  });
});
