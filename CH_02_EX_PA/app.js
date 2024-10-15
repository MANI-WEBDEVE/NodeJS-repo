import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import contactRoute from "./routes/contact.js";
import homeRoute from "./routes/home.js";

const app = express();

const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);

// Use body-parser middleware at the application level
app.use(bodyParser.urlencoded({ extended: true }));

// Static file serving (if needed for your HTML and assets)
// app.use(express.static(path.join(__dirname, "public")));

// Use the routes
app.use(contactRoute);
app.use(homeRoute)
app.use((req,res,next) => {
    res.sendFile(path.join(__dirname, "./views/404.html"))
})

const PORT = 3022;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
