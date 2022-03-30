import express from "express";


const app = express();

app.use(express.json()) // recurso pra interpretar json nas requisições

const livros = [
    {id:1, "titulo": "Senhor dos aneis"},
    {id:2, "titulo": "O hobbit"}
]

// criado dois métodos GET

app.get('/', (req,res) => {
    res.status(200).send('Curso de Node');
})

app.get('/livros', (req,res) => {
    res.status(200).json(livros)
})

app.put('/livros/:id', (req,res) => {
    let index = buscaLivro(req.params.id);
    res.json(livros[index]);
    res.send('Livro cadastrado com sucesso');
})

app.post('/livros', (req,res) => {
    livros.push(req.body);
    res.status(201).send('Livro cadastrado com sucesso')
})

app.put('/livros/:id', (req,res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
    res.send('Livro cadastrado com sucesso');
})

function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id);
}

// exportar o arquivo pra fazer uso no server

export default app