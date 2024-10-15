import express from "express"
import bodyParser from "body-parser"
import userRouter from "./routes/userRouter.js"
const app = express()
import path from "path"
import { fileURLToPath } from "url";
import contactRouter from "./routes/contactRouter.js"

const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "./public")));

app.use(userRouter)
app.use(contactRouter) 


const port = 3000
app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})
