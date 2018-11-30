const lista=[1,2,3];

const Handlers = require('../Handlers');
module.exports.rutas=[
      
    {
        method:'POST',
        path:'/carro',
        handler:Handlers.carroHandler.agregarCarrosAsyncAwait


    },
    {
        method:'POST',
        path:'/busquedaAvanzada',
        handler:Handlers.carroHandler.busquedaAvanzada


    },

    {
   method:'GET',
   path:'/hello',
   handler:function(request,h) {

       return{data: 'hola mundo 2'};
   }
},

   {
       method:'GET',
       path:'/lista',
       handler:function(request,h) {
   
           return{data: lista};
       }
   },
   {
    method:'GET',
    path:'/mostrar',
    handler:Handlers.carroHandler.mostrarCarros
    
},


   {
       method:'POST',
       path:'/lista',
       handler:function(request,h) {
           console.log(request.payload.data);
           lista.push(request.payload.data);
           return{data: lista};
       }
   },
   {
       method:'GET',
       path:'/lista/{id}',
       handler:function(request,h) {
           return {data: lista[request.params.id]};
       }
   }
   ,
   {
       method:'PUT',
       path:'/lista/{index}',
       handler:function(request,h) {
           lista[request.params.index]= request.payload.data;
           return {data: lista};
       }
   },
   {
       method:'DELETE',
       path:'/lista/{index}',
       handler:function(request,h) {
          lista.splice(request.params.index,1);
           return {data: lista};
       }
   },

   {
    method: 'PUT',
    path: '/carro/{index}',
    handler:Handlers.carroHandler.actualizarCarrosAsyncAwait,
    config:{
        pre: [
            {method: Handlers.preHandler.preValidar, assign: 'preTokenVal'}
        ]
    },
},


{
    method: 'DELETE',
    path: '/carro/{index}',
    handler:Handlers.carroHandler.eliminarCarrosAsyncAwait,
    config:{
        pre: [
            {method: Handlers.preHandler.preValidar, assign: 'preTokenVal'}
        ]
    },
},

{
    method:'POST',
    path:'/token',
    handler: Handlers.token.tokenSign
   
},
{
    method: 'GET',
    path: '/carro',
    config:{
        pre: [
            {method: Handlers.preHandler.preValidar, assign: 'preTokenVal'}
        ]
    },
    handler:Handlers.carroHandler.mostrarCarros
},
{
    method:'POST',
    path: '/usuario',
    handler:Handlers.usuarioHandler.addUsuario


},
{
    method:'POST',
    path:'/login',
    handler: Handlers.usuarioHandler.login
   
}

]