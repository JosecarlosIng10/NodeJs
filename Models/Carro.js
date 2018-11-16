const Mongoose = require('mongoose');

const Schema = Mongoose.Schema;

const Carros = new Schema({
    marca: String,
    modelo:String,
    color:String,
    anio:Number,
    puertas:Number,
    agencia:Boolean,
    asientos:Number

});

module.exports= Mongoose.model('Carro',Carros);