import { ImageProcessor } from "../services/image.processor";
import { ImageInputValidator } from "../validators/image.input.validator";
import express from "express";
const processor = new ImageProcessor();
const validator = new ImageInputValidator();
const router = express.Router();
const rootFileName = ".";

router.get(
  "/:name/:width/:height",
  async (req: express.Request, res: express.Response): Promise<void> => {
    const width = req.params.width;
    const height = req.params.height;
    const name = req.params.name;
    try {
      if (validator.validateImageName(name)) {
        res.status(404).send(`Image '${name}' not found.`);
        return;
      }

      const validationErrors = validator.validateSize(width, height);
      if (validationErrors.length > 0) {
        res.status(400).send(validationErrors);
        return;
      }

      const result = await processor.resize(
        name,
        Number(width),
        Number(height)
      );
      res.sendFile(result.filePath, { root: rootFileName });
    } catch (error) {
      res.status(500).send(`Something went wrong - ${error}`);
    }
  }
);

export default router;
