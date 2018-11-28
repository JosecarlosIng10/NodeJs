var token = process.argv[2];
console.log(token);
var jwt = require('jsonwebtoken');
jwt.verify(token, 'shhhhh', function(err, decoded) {
    if(err){
         console.log("Token invalido, Error: ", err);
 
    }else{
     console.log("Token Valido, Token: ",decoded.foo); // bar
 
    }
   });