const Usuario = require('../Models/Usuario');
const token = require('./token');

module.exports.addUsuario= async(request,h)=>{

    try {
        const usuarioAgregado=  await Usuario.create(request.payload.data);
        return usuarioAgregado;
    } catch (error) {
        return error;
    }
    
    
   
}

module.exports.login = async(request,h)=>{

    try {
        const usuario = await Usuario.findOne(request.payload.data);

        if(usuario===null){
            return {error:'credenciales incorrectas'};
        }
        //Todo: Generacion de Token
        const newToken = token.tokenSign({user: request.payload.data.user});

        if (newToken.token){
            return {
                data:newToken
            }

        }
        else{
            return{
                error:newToken
            }
        }
       console.log(newToken );
        return {data: newToken };
    } catch (error) {
        console.log(error)
        return {error};
    }
    
    
   
}
