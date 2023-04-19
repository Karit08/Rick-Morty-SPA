require("dotenv").config();
const PORT = process.env.PORT || 3001 ;

const express = require("express");
const morgan  = require("morgan");
const cors = require("cors");

const server = express();
const router = require("./routes");

server.use(express.json()); // transfoma en Objeto JS
server.use(morgan("dev")); //imprime en consola que request hacemos
server.use(cors());

server.use(router); // PRINCIPAL ******************************************

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});