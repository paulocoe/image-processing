import sharp from "sharp";
import mkdirp from "mkdirp";
import fs from "fs";

interface ImageProcessorOutput {
  width: number;
  height: number;
  format: string;
  filePath: string;
}

export class ImageProcessor {
  private pathToResources = "src/resources";
  private pathToProcessed = `${this.pathToResources}/Processed`;
  private fileFormat = ".jpeg";
  public async resize(
    imageName: string,
    width: number,
    height: number
  ): Promise<ImageProcessorOutput> {
    const sourceImagePath = `${this.pathToResources}/${imageName}${this.fileFormat}`;
    const formattedFilePath = `${this.pathToProcessed}/${imageName}${width}x${height}${this.fileFormat}`;

    if (await this.checkFileExists(formattedFilePath)) {
      return { width, height, format: "jpeg", filePath: formattedFilePath };
    }

    try {
      await mkdirp(this.pathToProcessed);

      return await this.resizeImage(
        sourceImagePath,
        formattedFilePath,
        width,
        height
      );
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async resizeImage(
    sourcefilePath: string,
    resultFilePath: string,
    width: number,
    height: number
  ): Promise<ImageProcessorOutput> {
    const outputInfo = await sharp(sourcefilePath)
      .resize(width, height)
      .toFile(resultFilePath);

    return {
      width: outputInfo.width,
      height: outputInfo.height,
      format: outputInfo.format,
      filePath: resultFilePath,
    };
  }

  private async checkFileExists(filePath: string): Promise<boolean> {
    try {
      await fs.promises.access(filePath);
      return true;
    } catch (error) {
      return false;
    }
  }
}
