import { ImageProcessor } from "./../services/image.processor";
import express from "express";
const processor = new ImageProcessor();
const router = express.Router();
const rootFileName = "src";
router.get("/:name/:width/:height", async (req, res) => {
  const width = req.params.width;
  const height = req.params.height;
  const name = req.params.name;
  await processor.resizeImage(name, Number(width), Number(height));
  res.sendFile(`resources/Processed/${name}${width}x${height}.jpeg`, {
    root: rootFileName,
  });
});

export default router;
