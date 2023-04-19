const express = require("express");
const morgan  = require("morgan");
const server = express();
const router = require("./routes");

require("dotenv").config();
const PORT = process.env.PORT || 3001 ;

server.use(express.json());
server.use(morgan("dev"))
server.use(router);

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});