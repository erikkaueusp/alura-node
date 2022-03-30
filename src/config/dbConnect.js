import mongoose from "mongoose";

mongoose.connect("String de conexão");

let db = mongoose.connection;

export default db;