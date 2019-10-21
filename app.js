//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _=require("lodash");
const mongoose=require("mongoose");
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


mongoose.connect("mongodb+srv://admin:test123@cluster0-b4qcr.mongodb.net/Currency_exchangeDB",{useNewUrlParser:true});

const userSchema=new mongoose.Schema({
  user_id:String,
  user_password:String
});
const userModel=mongoose.model("user",userSchema);
userModel.insertMany([{user_id:"gfz159357",user_password:"zxc159357"}],function(err){});





app.get("/",function(req,res){
  res.send("hi");
});

app.listen(process.env.PORT||3002, function() {
  console.log("Server started on port 3002~");
});
