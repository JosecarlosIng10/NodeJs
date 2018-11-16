const Carro = require('../Models/Carro');

module.exports.agregarCarros=(request,h)=>{

    const carro = new Carro(request.payload.data);

    carro.save();


   
   

}