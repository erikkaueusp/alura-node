// istalado nodemon 2.0.15 que faz o live server

import app from "./src/app.js"; // precisa colocar a extensão, se não as vezes ele não encontra a dependencia.


// const http = require("http")  // importa o módulo nativo http.
// const port = 3000;  // porta que vai escutar a requisição

const port = process.env.PORT || 3000;

// const rotas = {
//     '/':'Curso de Node',
//     '/livros': 'Entrei na pag de livros',
//     '/autores': 'Listagem de autores'
// }


// const server = http.createServer((req,res) => {
//     // status OK e devolve o content-type
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end(rotas[req.url]); 

// }) // cria o servidor e escuta, precisa ter requisição e resposta e o callback




app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})