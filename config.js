const mongoose = require ('mongoose');
require('dotenv').config()
console.log(process.env.DATABASE_URL)
mongoose .connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
    
           })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));