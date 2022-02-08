import sharp, { OutputInfo } from "sharp";

export class ImageProcessor {
  private pathToResources = "src/resources";
  private fileFormat = ".jpeg";
  public async resizeImage(
    imageName: string,
    width: number,
    height: number
  ): Promise<OutputInfo> {
    const sourceImagePath = `${this.pathToResources}/${imageName}${this.fileFormat}`;
    const formattedFilePath = `${this.pathToResources}/Processed/${imageName}${width}x${height}${this.fileFormat}`;

    console.log(sourceImagePath);
    console.log(formattedFilePath);

    try {
      return sharp(sourceImagePath)
        .resize(width, height)
        .toFile(formattedFilePath);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
