import express from "express";
import compression from "compression";

const app = express();
const port = process.env.PORT || 3000;

app.use(compression());
app.use(express.static("dist"));

app.listen(port, () => {
  console.log(`Chess training app listening at http://localhost:${port}`);
});
