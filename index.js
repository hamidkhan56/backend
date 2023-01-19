// const { default: mongoose } = require("mongoose");

const express = require('express');
require('./config');
 const employes = require('./employes')
 const app = express();
 app.use(express.json());
 require('dotenv').config()


 app.get('/', (req, res) => {

res.send("welcome to my app")
  
 })

 app.post("/create", async(req,resp)=>{
  let data =  new employes.insertMany(req.body)
  let result =  await data.save();

  console.log(result)
         resp.send(result);
 })
 app.listen(5000); 
  // const mongoose = require('mongoose');
  // const express = require('express');
  // const app = express();
  // mongoose.set('strictQuery',false)
  // mongoose.connect('mongodb://localhost:27017/users',{useNewurlparser: false});

  // const usersSchema = mongoose.Schema({
  //   name:String,
  //   email:String,
  //   contact:Number
  // });
  
  // const   myFunction = async () => {
  //   const employes = mongoose.model('employes',usersSchema) 
  //   let data = new employes({
  //     name:"ROmi La",
  //     email:"RomiLA0100@gmail.com",
  //     contact:"003219513701"
  //   })
  //   const result = await data.save()
     
  // }
  // myFunction();







