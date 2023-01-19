const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    firstName:String,
    lastName : String,
    password:String,
     cnic:Number,
     phone:Number

})
module.exports = mongoose.model("user",UserSchema);