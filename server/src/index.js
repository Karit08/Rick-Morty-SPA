//aqui solo tengo mi listen que esta escuchando el puerto, asi aislamos el .listen del test

require("dotenv").config();
const PORT = process.env.PORT || 3001 ;
const server = require("./app");

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});