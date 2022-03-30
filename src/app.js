import express from "express";


const app = express();

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


// exportar o arquivo pra fazer uso no server

export default app