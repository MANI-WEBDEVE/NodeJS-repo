import express from "express"
import bodyParser from "body-parser"
import userRouter from "./routes/userRouter.js"
import hostRouter from "./routes/hostRouter.js"
const app = express()

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/user",userRouter)
app.use("/host",hostRouter)



const port = 3000
app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})
