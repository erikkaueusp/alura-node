// istalado nodemon 2.0.15 que faz o live server

const http = require("http")  // importa o módulo nativo http.
const port = 3000;  // porta que vai escutar a requisição

const rotas = {
    '/':'Curso de Node',
    '/livros': 'Entrei na pag de livros',
    '/autores': 'Listagem de autores'
}


const server = http.createServer((req,res) => {
    // status OK e devolve o content-type
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(rotas[req.url]); 

}) // cria o servidor e escuta, precisa ter requisição e resposta e o callback

server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})