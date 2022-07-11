import express from 'express';
import AutoresController from '../controllers/autoresController.js';
import autores from '../controllers/autoresController.js';

const router = express.Router();


router
    .get('/autores',AutoresController.listaAutores)
    .get('/autores/:id',AutoresController.mostraAutor)
    .post('/autores',AutoresController.cadastraAutor)
    .put('/autores/:id',AutoresController.atualizaAutor)
    .delete('/autores/:id',AutoresController.deletaAutor)

export default router;