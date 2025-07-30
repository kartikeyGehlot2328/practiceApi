const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const Usermodel = require("./models/user.js");


const app = express();
app.listen(8080,()=>{ console.log("server started listening ")});
app.use(cors());

app.get("/currency",(req, res)=>{
   res.send("Hello im currency");
})


app.get("currency/new", (req, res)=>{
   res.send("hi im new currency");
})
