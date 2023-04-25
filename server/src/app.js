//guarda todos los MIDLEWARE

require("dotenv").config();
const PORT = process.env.PORT || 3001 ;

const express = require("express");
const morgan  = require("morgan");
const cors = require("cors");

const server = express();
const router = require("./routes");

server.use(express.json()); // transfoma en Objeto JS
server.use(morgan("dev")); //imprime en consola que request hacemos
// server.use(cors());  //Habilito todas las solicitudes CORS, 
server.use((req, res, next) => { //Seteamos headers para la respuesta que le enviamos al cliente en cambio de linea 13
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});

server.use( "/rickandmorty", router); // PRINCIPAL ******************************************

// server.listen(PORT, () => { // no puedo tener el listen aqui por el test
//    console.log('Server raised in port: ' + PORT);
// });

module.exports = server;