import mongoose from "mongoose";
import autores from '../models/Autor.js'

class AutoresController{
        static listaAutores = (req,res)=>{
            autores.find((err,autores)=>{
                res.status(200).json(autores)
            })
        }

        static mostraAutor = (req,res)=>{
            const id = req.params.id;
            autores.findById(id,(err,autores)=>{
                if(err){
                    res.status(400).send({message: `${err.message}`})
                }else{
                    res.status(200).send(autores);
                }
            })
        }

        static cadastraAutor = (req,res)=>{
            let autor = new autores(req.body);
            autor.save((err)=>{
                if(err){
                    res.status(500).send({message: "Não foi possível cadastrar novo autor"})
                }else{
                    res.status(200).send(autor.toJSON())
                }
            })
        }

        static atualizaAutor = (req,res)=>{
            const id = req.params.id;
            autores.findByIdAndUpdate(id,{$set: req.body},(err)=>{
                if(err){
                    res.status(400).send({message: err.mesage})
                }else{
                    res.status(200).send({message:'livro atualizado com sucesso!'})
                }
            })
        }

        static deletaAutor = (req,res)=>{
            let id = req.params.id;
            autores.findByIdAndDelete(id,(err)=>{
                if(err){
                    res.status(500).send({message: "Não foi possível deletar o autor"})
                }else{
                    res.status(200).send({message: "autor deletado com sucesso!"})
                }
            })
        }
}

export default AutoresController;