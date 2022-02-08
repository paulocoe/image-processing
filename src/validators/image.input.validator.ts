export class ImageInputValidator {
  images = [
    "encenadaport",
    "fjord",
    "santamonica",
    "palmtunnel",
    "icelandwaterfall",
  ];

  public validate(name: string, width: string, height: string): string[] {
    const validationErrors = [];

    if (!this.images.some((x) => x === name))
      validationErrors.push(`Name '${name}' is invalid.`);

    if (isNaN(Number(width)))
      validationErrors.push(`Width '${width}' is invalid.`);

    if (isNaN(Number(height)))
      validationErrors.push(`Height '${height}' is invalid.`);

    return validationErrors;
  }
}
