var jwt = require('jsonwebtoken');
module.exports.preValidar = (request)=>{
    bandera=false;
    const {headers} = request;

    jwt.verify(headers.token, process.env.SECUREJWT, function(err, decoded) {
    if(err){
        bandera=false;
 
    }else{
     bandera=true;
 
    }
   });
    
   
    
    if(bandera){
        return 1;
    }
    return -1;
}
