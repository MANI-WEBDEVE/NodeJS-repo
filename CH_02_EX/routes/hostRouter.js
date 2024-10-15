import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const hostRouter = express.Router();
const fileNmae = fileURLToPath(import.meta.url);  
const __dirname = path.dirname(fileNmae);


hostRouter.get("/home-add", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/home-add.html"))
});

hostRouter.post("/home-add", (req, res) => {
  console.log(req.body); // Will now show the correct data
  res.sendFile(path.join(__dirname, "../views/home-add-success.html"))
});


export default hostRouter