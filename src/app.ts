import express from "express";
import images from "./routes/images.route";
const app = express();
const port = 3000;

app.use("/images", images);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
