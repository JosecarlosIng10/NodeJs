require('dotenv').config();
const db = require('./Config/database').db;

const Hapi=require('hapi');

// Create a server with a host and port
const server=Hapi.server({
    host:'localhost',
    port:8000
});

//Rutas

const rutas = require('./Routes');

// Add the route

server.route(
    rutas.rutas
    
    

);



server.ext('onPreResponse', (Request,h)=>{
    if (Request.response!=null && Request.response.header != null){
        Request.response.header('Access.Control.Allow.Origin','*');
        Request.response.header('Access.Control.Allow.Headers','Content-Type,token');
        Request.response.header('Access.Control.Allow.Methods','GET,POST,PUT,DELETE');
        console.log(Request.headers);
    }
    return h.continue;



});
// Start the server
async function start() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();