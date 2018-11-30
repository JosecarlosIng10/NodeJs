const  Mongoose = require('mongoose');

const uri=`mongodb://${process.env.MIP}:${process.env.MPORT}/${process.env.MDBNAME}`;

Mongoose.connect(uri,{useNewUrlParser:true});

const db = Mongoose.connection;

db.on('error',console.error.bind(console,'connection error'));

db.once('open',()=>{
    console.log('Conexion correcta a Mongodb');
});

