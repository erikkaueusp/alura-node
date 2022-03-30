const http = require("http")  // importa o módulo nativo http.
const port = 3000;  // porta que vai escutar a requisição


const server = http.createServer((req,res) => {
    // status OK e devolve o content-type
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Curso de Node'); 

}) // cria o servidor e escuta, precisa ter requisição e resposta e o callback

server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})