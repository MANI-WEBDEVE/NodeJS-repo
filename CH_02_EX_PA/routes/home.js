import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const homeRoute = express.Router()
const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);


homeRoute.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/home.html"))
})

export default homeRoute;