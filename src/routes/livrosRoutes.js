import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();


router
    .get('/livros',LivroController.listarLivros)
    .get('/livros/busca',LivroController.listarLivroByEditora) // cuidado, esse método precisa estar acima de id para não confundir que a query da busca é um id.
    .get('/livros/:id',LivroController.listarLivroPorId)
    .post('/livros',LivroController.cadastrarLivro)
    .put('/livros/:id',LivroController.atualizarLivro)
    .delete('/livros/:id',LivroController.excluirLivro)

export default router;