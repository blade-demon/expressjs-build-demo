import express from "express";
import path from "path";
import ejs from "ejs";
import { fileURLToPath } from "url";
import userRoutes from "./routes/user.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", function (req, res) {
  res.render("pages/index");
});

app.get("/users", userRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
