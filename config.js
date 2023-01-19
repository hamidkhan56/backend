const mongoose = require ('mongoose');
const db = "mongodb://localhost:27017/users"
mongoose .connect(db, {
        useNewUrlParser: true,
           })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));