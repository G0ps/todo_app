import express from "express"
import cors from "cors"

import "dotenv/config"
import "./primary_config/db/connect_db.js"

const app = express()

app.use(express.json())

app.use(cors({origin : ['https://todo-app-snowy-ten-37.vercel.app']}))

const port = process.env.PORT || 3000

console.log("env port : " , process.env.PORT)

app.get("/" , (req , res) => {
    return res.send("hello");
})

import posts_routes from "./routes/posts_routes.js"
import users_routes from "./routes/users_routes.js"

app.use('/users' , users_routes)
app.use('/posts' , posts_routes);

app.listen(port , () => {
    console.log(`app started successfully..\nrunning on : http://localhost:${port}`)
})