const mongoose= require('mongoose');
const usersSchema = new mongoose.Schema ({
    name:String,
    email:String,
    contact:Number
})

 module.exports  =  mongoose.model('employes',usersSchema);