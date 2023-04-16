const http = require("http");
const data = require("./utils/data");
const getCharById = require("./controllers/getCharById");

// tarea 1 ------------------------------------------- (WEB SERVER)
// http.createServer((req, res) =>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
    
//     const {url} = req;
//     if(url.includes("rickandmorty/character/")){
//         const id = Number(url.split("/").at(-1));
//         const character = data.find((char)=> char.id === id);
        
//         if(character){
//             res.writeHead(200, {"Content-Type": "application/json"});
//             return res.end(JSON.stringify(character));
//         }else{
//             res.writeHead(404, {"Content-Type": "application/json"});
//             return res.end(JSON.stringify({error: "Characyer not found"}));
//         }
//     }

// }).listen(3001, "localhost")

// tarea 2 ------------------------------------------- (PROMISE)

http.createServer((req, res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    const {url} = req;
    
    if(url.includes("/rickandmorty/character")){
        const id = Number(url.split("/").at(-1));
        // res.end("holi");
        getCharById(res, id);
    };

}).listen(3001, "localhost")