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

const campSchema=new mongoose.Schema({
  name:String,
  image:String,
  description:String
});
const campModel=mongoose.model("camp",campSchema);
// campModel.insertMany([{name:"salmon greek", image:"https://wsd.casio.com/assets/img/bg_home1.jpg",description:"I like the greek,hope to fuck some ladys here"},
// {name:"granite hill",image:"https://cdn2.outdoorphotographer.com/2019/04/OP_SPRING_MEM_OP_SLIDER-w.jpg",description:"I like the place,hope to fuck some ladys here"},
// {name:"mountain goat's rest",image:"http://www.outdoorcouncil.asn.au/wp-content/uploads/2016/08/Outdoor-Council-of-Australia.jpg",description:"I like the place,hope to fuck some ladys here"},
// {name:"salmon greek", image:"https://wsd.casio.com/assets/img/bg_home1.jpg",description:"I like the place,hope to fuck some ladys here"},
// {name:"granite hill",image:"https://cdn2.outdoorphotographer.com/2019/04/OP_SPRING_MEM_OP_SLIDER-w.jpg",description:"I like the place,hope to fuck some ladys here"},
// {name:"mountain goat's rest",image:"http://www.outdoorcouncil.asn.au/wp-content/uploads/2016/08/Outdoor-Council-of-Australia.jpg",description:"I like the place,hope to fuck some ladys here"},
// {name:"salmon greek", image:"https://wsd.casio.com/assets/img/bg_home1.jpg",description:"I like the place,hope to fuck some ladys here"},
// {name:"granite hill",image:"https://cdn2.outdoorphotographer.com/2019/04/OP_SPRING_MEM_OP_SLIDER-w.jpg",description:"I like the place,hope to fuck some ladys here"},
// {name:"mountain goat's rest",image:"http://www.outdoorcouncil.asn.au/wp-content/uploads/2016/08/Outdoor-Council-of-Australia.jpg",description:"I like the place,hope to fuck some ladys here"}],function(err){});



app.get("/",function(req,res){
  res.render("landing");
});

app.get("/campgrounds",function(req,res){
  campModel.find({},function(err,campgrounds){
    if(err){
      console.log(err);
    }else{
      res.render("campgrounds",{campgrounds:campgrounds});
    }
  });
});

app.get("/campgrounds/new",function(req,res){
  res.render("new");
});

app.get("/campgrounds/:id",function(req,res){
  var id=req.params.id;
  console.log(id);
  campModel.findById(id,function(wrong,item){
    if(wrong){console.log(wrong)}
    else{
      res.render("detail",{item:item});
    }
  });
});

app.post("/campgrounds",function(req,res){
  var name=req.body.name_of_img;
  var image=req.body.url_of_img;
  var description=req.body.description;
  campModel.insertMany([{name:name, image:image,description:description}],function(err){});

  res.redirect("campgrounds");
});

app.listen(process.env.PORT||3002, function() {
  console.log("Server started on port 3002~");
});
