import mongoose from "mongoose";

mongoose.connect("mongodb+srv://crashever:t3st3@node-express.ecd8b.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;