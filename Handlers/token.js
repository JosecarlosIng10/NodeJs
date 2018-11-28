const jwt = require('jsonwebtoken');
const expiresIn=20;
module.exports.tokenSign= (Request,h)=>{
   
    try{
    var token = jwt.sign(Request.payload.data, process.env.SECUREJWT, {expiresIn});
    }
    catch(err){
        console.log(err);
        return err;
    }
   
    return {token};

};