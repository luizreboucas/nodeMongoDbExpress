import express from "express";
import EditoraController from "../controllers/editoraController.js";

const router = express.Router();

router
    .get('/editoras',EditoraController.listaEditora)
    .post('/editoras',EditoraController.cadastraEditora)

    export default router;