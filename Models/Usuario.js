const Mongoose = require('mongoose');

const Schema = Mongoose.Schema;

const Usuarios = new Schema({
    user: String,
    password:String
    
    

});

module.exports= Mongoose.model('Usuario',Usuarios);