import livros from "../models/Livro.js";

class LivroController {

    static listarLivros = (req,res)=>{
        livros.find()
            .populate('autor')
            .exec((err,livros)=>{
                if(err){
                    console.log(err.message)
                }
            res.status(200).json(livros);
        });
    }

    static mostraLivro = (req,res)=>{
        let id = req.params.id;
        livros.findById(id,(err,livros)=>{
            if(err){
                res.status(400).send({message: err.message});
            }else{
                res.status(200).send(livros)
            }
        })
    }

    static cadastraLivro = (req,res)=>{
        let livro = new livros(req.body);

        livro.save((err)=>{
            if(err){
                res.status(500).send({ message: "Não foi possível cadastrar Livro"});
            }else{
                res.status(201).send(livro.toJSON());
            }
        })
    }

    static atualizaLivro = (req,res)=>{
        let id = req.params.id;
        livros.findByIdAndUpdate(id, {$set: req.body}, (err)=>{
            if(!err){
                res.status(200).send({message:'Livro Atualizado com Sucesso'});
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }

    static deletaLivro = (req,res)=>{
        const id = req.params.id;
        livros.findByIdAndDelete(id,(err)=>{
            if(err){
                res.status(500).send({message: err.message})
            }else{
                res.status(200).send({message: "Livro Deletado Com Sucesso"})
            }
        })
    }
}



export default LivroController;