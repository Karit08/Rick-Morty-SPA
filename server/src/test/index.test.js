//el archivo también se puede llamar spec.js o test.js

const app = require('../app');
const session = require('supertest');
const agent = session(app);

// "Test de RUTAS"

describe('GET /rickandmorty/character/:id', ()=>{
    it('Responde con status: 200', async ()=>{
        // await agent.get('/rickandmorty/character/1').expect(200); // una forma de hacerlo 
        const response = await session(app).get("/rickandmorty/character/1"); //hago la petición, guardando en una constate la respuesta del servidor 
        expect(response.statusCode).toBe(200)
    });
    test('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async ()=>{
        const response = await session(app).get("/rickandmorty/character/1");
        expect(Object.keys(response.body)).toEqual([
            "id", 
            "status", 
            "name", 
            "species", 
            "origin", 
            "image", 
            "gender",
        ]);
    });
    it( 'Si hay un error responde con status: 500', async()=>{ // con async await
        const response = await session(app).get("/rickandmorty/character/1n");
        expect(response.statusCode).toBe(500);
    });
    it( 'Si hay un error responde con status: 500', () =>{ // con promesas 
        return agent.get("/rickandmorty/character/1n")
        .send()
        .then(response => expect(response.statusCode).toBe(500));
    });
});

describe("GET /rickandmorty/login", ()=>{
    it("Responde con el objeto JSON {access: true} si el usuario se logueo correctamente", async ()=>{
        const response = await session(app).get("/rickandmorty/login?email=karla@gmail.com&password=Karla123");
        // console.log(response);
        expect(response.body).toEqual({access: true});
    });
    it("Responde con el objeto JSON {access: false} si el usuario se logueo incorrectamente", async ()=>{
        const response = await session(app).get("/rickandmorty/login?email=javis@gmail.com&password=12345");
        expect(response.body).toEqual({access: false});
    });
});

// describe("POST /rickandmorty/fav", ()=>{

// });

// describe("DELETE /rickandmorty/fav/:id", ()=>{

// });
