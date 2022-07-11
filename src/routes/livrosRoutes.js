import express from 'express';
import LivroController from '../controllers/livrosController.js';

const router = express.Router();

router
    .get('/livros',LivroController.listarLivros)
    .get('/livros/:id',LivroController.mostraLivro)
    .post('/livros',LivroController.cadastraLivro)
    .put('/livros/:id',LivroController.atualizaLivro)
    .delete('/livros/:id',LivroController.deletaLivro)
export default router;