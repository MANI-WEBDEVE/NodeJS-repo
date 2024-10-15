import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const contactRoute = express.Router();

const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);

// Serve the contact page
contactRoute.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/contact-us.html"));
});

// Handle the form submission
contactRoute.post("/contact", (req, res) => {
    console.log(req.body); // This should now log the form data
    res.send("Thank you for your message");
});

export default contactRoute;
