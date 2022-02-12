const express = require("express")
const connect = require("./models")
const user = require('./models/user')
const cors = require("cors")
const port = 3000
const app = express()
connect()

const userRouter = require("./routes/user")

//body 읽기
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use(cors())


const postRouter = require("./routes/post");
app.use("/api", [postRouter, userRouter]/* [goodRouter,userRouter] 이런식으로 쓸수도*/);

app.get("/", async (req, res) => {
  //await user.create({ userId: 'test', password: 'test', nickname: 'test' });
  res.send("Hello World")
})

app.listen(port, () => {
  console.log("running on port", port)
})
