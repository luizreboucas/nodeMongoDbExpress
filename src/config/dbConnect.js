import mongoose from "mongoose";

mongoose.connect('mongodb+srv://luizreboucas:luigelatto10@alura.i4ddoph.mongodb.net/alura-node');

let db = mongoose.connection;

export default db;