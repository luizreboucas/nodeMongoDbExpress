import express from 'express';
import editora from '../models/Editora.js'

class EditoraController{
    static listaEditora = (req,res)=>{
        editora.find((err,editora)=>{
            res.status(200).json(editora)
        })
    }

    static cadastraEditora = (req,res)=>{
        let editoraNova = new editora(req.body)
        editoraNova.save((err)=>{
            if(err){
                res.status(500).send({message: err.message})
            }else{
                res.status(200).send({message: "Livro Cadastrado com sucesso"})
            }
        });
    }
}

export default EditoraController;