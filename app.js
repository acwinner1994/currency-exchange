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

app.get("/",function(req,res){
  res.send("hi");
});

app.listen(process.env.PORT||3002, function() {
  console.log("Server started on port 3002~");
});
