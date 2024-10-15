import express from "express";

import path from "path";

import { fileURLToPath } from "url";

const contactRouter = express.Router();

const filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(filename);

contactRouter.get("/test", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/test.html"));
});

contactRouter.post("/test", (req, res) => {
  console.log(req.body); // This should log the data from any POST request
  res.send("POST request received.");
});


export default contactRouter