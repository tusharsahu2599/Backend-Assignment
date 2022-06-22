
const express = require('express');
const connect = require("./src/configs/db")
const User = require("./src/controllers/user.controller")
require("dotenv").config()


const app = express()

app.use(express.json())
app.use("/user",User)
const Port = process.env.PORT || 5000
app.listen(Port,async()=>{
    await connect
    console.log("Server is running on port " + Port)
})