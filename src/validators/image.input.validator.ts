export class ImageInputValidator {
  images = [
    "encenadaport",
    "fjord",
    "santamonica",
    "palmtunnel",
    "icelandwaterfall",
  ];

  public validateImageName(name: string): boolean {
    return !this.images.some((x) => x === name);
  }

  public validateSize(width: string, height: string): string[] {
    const validationErrors = [];
    const errorMessage = "must be a positive integer number.";
    const parsedWidth = Number(width);
    const parsedHeight = Number(height);

    if (isNaN(parsedWidth) || parsedWidth <= 0)
      validationErrors.push(`Width '${width}' ${errorMessage}`);

    if (isNaN(parsedHeight) || parsedHeight <= 0)
      validationErrors.push(`Height '${height}' ${errorMessage}`);

    return validationErrors;
  }
}
