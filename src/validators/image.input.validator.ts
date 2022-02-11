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

    if (isNaN(Number(width)))
      validationErrors.push(`Width '${width}' is invalid.`);

    if (isNaN(Number(height)))
      validationErrors.push(`Height '${height}' is invalid.`);

    return validationErrors;
  }
}
