import mongoose from 'mongoose';

const editoraSchema = new mongoose.Schema({
    id: {type: String},
    endereco: {type: String, required: true}
})

const editora = mongoose.model('editora',editoraSchema);

export default editora;