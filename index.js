// const { default: mongoose } = require("mongoose");

  const mongoose = require('mongoose');
  mongoose.set('strictQuery',false)
  mongoose.connect('mongodb://localhost:27017/users',{useNewurlparser: false});

  const usersSchema = mongoose.Schema({
    name:String,
    email:String,
    contact:Number
  });
  
  const   myFunction = async () => {
    const employes = mongoose.model('employes',usersSchema) 
    let data = new employes({
      name:"ROmi La",
      email:"RomiLA0100@gmail.com",
      contact:"003219513701"
    })
    const result = await data.save()
     
  }
  myFunction();



// const express = require('express');
// const { mongoose } = require('mongoose');
// const router  = express.Router();
// // const router = require('./src/routes/Route')
// const port =  6000 || 9000
// const app  = express();
// const cors = require('cors');

// app.use(cors());

// router.get('/', (req, res) => {
//   res.send("welcome")

// }

// )

// // app.use('/api', router)
// mongoose.connect("mongodb://localhost:27017");
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, "connection error"));
// db.once('open', function(){
//     console.log("Database connected")
// });
// app.listen(()=> console.log(
//   `server is running at ${port}`
// ))

