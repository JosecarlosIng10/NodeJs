const jwt = require('jsonwebtoken');
const expiresIn=1000;
module.exports.tokenSign= (payload)=>{
   
    try{
    var token = jwt.sign(payload, process.env.SECUREJWT, {expiresIn});
    }
    catch(err){
        console.log(err);
        return err;
    }
   
    return {token};

};

