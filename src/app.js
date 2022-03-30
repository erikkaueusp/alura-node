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

app.get('/livros/:id', (req,res) => {
    let index = buscaLivro(req.params.id);
    res.json(livros[index]);
})

app.post('/livros', (req,res) => {
    livros.push(req.body);
    res.status(201).send('Livro cadastrado com sucesso')
})

app.put('/livros/:id', (req,res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
    res.send('Livro atualizado com sucesso');
})

app.delete('/livros/:id', (req,res) => {
    let {id} = req.params; // aqui foi feita uma atribuição via desestruturação.
    let index = buscaLivro(id);
    livros.splice(index,1) // index até 1 ou seja não será uma sequencia de exclusão.
    res.json(livros);
    res.send(`Livro ${id} excluido`);
})


function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id);
}

// exportar o arquivo pra fazer uso no server

export default app