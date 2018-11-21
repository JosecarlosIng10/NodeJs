const Carro = require('../Models/Carro');

module.exports.agregarCarrosCB=(request,h)=>{

    const carro = new Carro(request.payload.data);

    return new Promise ((resolve, reject)=>{
        
        ////CallBack Save ..................
        carro.save((err, carro)=>{
            if (err){
               return  reject( err);
    
            }
            
            return resolve(carro);
        });
        //........................
    })
  
   

}

module.exports.agregarCarrosPromise=(request,h)=>{

    const carro = new Carro(request.payload.data);

    return Carro.create(request.payload.data)
    
    .then(res=>{
        console.log('Then Create ', res);
        return Carro.update({_id: res._id},res);
    })
    .then(res2 =>{
        console.log ('then update', res2);
        return res2;

    })
    .catch(err=>{
        console.log(err);
        return err;
    })
   

}
module.exports.busquedaAvanzada = async(request,h)=>{
try {
    const carros = await Carro.findOne(request.payload.data);
    console.log(carros);
    return carros;
    
} catch (error) {
    console.log(error);
    return error;
}

}

module.exports.mostrarCarros = async (request , h)=>{
    try {
        if (!request.query.id){
        const carro = await Carro.find();
        return carro;
        }
        return await Carro.findById({_id:request.query.id});
    } catch (error) {
        console.log(error);
        return error;
    }


}
module.exports.agregarCarrosAsyncAwait= async(request,h)=>{

    try {
        const carro = new Carro(request.payload.data);

    const carroAgregado=  await Carro.create(request.payload.data);
    console.log(fasync());
    console.log(carroAgregado);
    return carroAgregado;
    } catch (error) {
        return error;
    }
    
    
   
}


//Async crea una promesa.

const fasync = async()=>{
    return 'Hola mundo'
}