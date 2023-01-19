const mongoose = require ('mongoose');

mongoose .connect("mongodb://localhost:27017/users", {
        useNewUrlParser: true,
           })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));