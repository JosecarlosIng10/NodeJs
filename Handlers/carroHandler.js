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
        const {preTokenVal} = request.pre;
        if(preTokenVal === -1){
            return h.response({error: 'no tiene token'});
        }
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


module.exports.actualizarCarrosAsyncAwait = async (req, h)=>{
    try {
        const {preTokenVal} = req.pre;
        if(preTokenVal === -1){
            return h.response({error: 'no tiene token'});
        }
        const carroActualizado = await Carro.findByIdAndUpdate(req.params.index, 
            req.payload.data);
        return h.response(carroActualizado);
    } catch (error) {
        return h.response(error);
    }   
}

module.exports.eliminarCarrosAsyncAwait = async (req, h)=>{
    try {
        const {preTokenVal} = req.pre;
        if(preTokenVal === -1){
            return h.response({error: 'no tiene token'});
        }
        const carroEliminado = await Carro.findByIdAndDelete(req.params.index);
        return h.response(carroEliminado);
    } catch (error) {
        return h.response(error);
    }   
}

//Async crea una promesa.

const fasync = async()=>{
    return 'Hola mundo'
}