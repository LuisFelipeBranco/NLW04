import express, { request, response } from 'express';

const app = express();
/*
GET->Busca
POST->Salvar
PUT->Alterar
DELETE->Deletar
PATCH->Alteração especifica
*/

app.listen(3333, ()=>console.log("Server is running"));

app.get("/", (request, response)=>{
    return response.json({ message: "@Hello World@" })
})

app.post("/", (request, response) => {
    return response.json({ message: "Os dados foram salvos com sucesso!!" })
})