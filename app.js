//jshint esversion:6
//call back function is the function that will be executed after the execution of its original function

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _=require("lodash");
const mongoose=require("mongoose");
const app = express();
app.set('view engine', 'ejs');//set view engine, so no need to add .ejs at the end
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


mongoose.connect("mongodb+srv://admin:test123@cluster0-b4qcr.mongodb.net/Currency_exchangeDB",{useNewUrlParser:true});

const userSchema=new mongoose.Schema({
  user_id:String,
  user_password:String
});
const userModel=mongoose.model("user",userSchema);
userModel.insertMany([{user_id:"gfz159357",user_password:"zxc159357"}],function(err){});

var campgrounds=[
  {name:"salmon greek", image:"https://wsd.casio.com/assets/img/bg_home1.jpg"},
  {name:"granite hill",image:"https://cdn2.outdoorphotographer.com/2019/04/OP_SPRING_MEM_OP_SLIDER-w.jpg"},
  {name:"mountain goat's rest",image:"http://www.outdoorcouncil.asn.au/wp-content/uploads/2016/08/Outdoor-Council-of-Australia.jpg"},
  {name:"salmon greek", image:"https://wsd.casio.com/assets/img/bg_home1.jpg"},
  {name:"granite hill",image:"https://cdn2.outdoorphotographer.com/2019/04/OP_SPRING_MEM_OP_SLIDER-w.jpg"},
  {name:"mountain goat's rest",image:"http://www.outdoorcouncil.asn.au/wp-content/uploads/2016/08/Outdoor-Council-of-Australia.jpg"},
  {name:"salmon greek", image:"https://wsd.casio.com/assets/img/bg_home1.jpg"},
  {name:"granite hill",image:"https://cdn2.outdoorphotographer.com/2019/04/OP_SPRING_MEM_OP_SLIDER-w.jpg"},
  {name:"mountain goat's rest",image:"http://www.outdoorcouncil.asn.au/wp-content/uploads/2016/08/Outdoor-Council-of-Australia.jpg"}
]

app.get("/",function(req,res){
  res.render("landing");
});

app.get("/campgrounds",function(req,res){
  res.render("campgrounds",{campgrounds:campgrounds});
});

app.get("/campgrounds/new",function(req,res){
  res.render("new");
});

app.post("/campgrounds",function(req,res){
  var name=req.body.name_of_img;
  var image=req.body.url_of_img;
  campgrounds.push({name:name,image:image});

  campgrounds.forEach(function(camp){
    console.log(camp.name);
  });
  res.redirect("campgrounds");
});

app.listen(process.env.PORT||3002, function() {
  console.log("Server started on port 3002~");
});
