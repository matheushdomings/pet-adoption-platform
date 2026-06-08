const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    especie: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "Disponível"
    },
    idade: {
        type: Number
    },
    raca: {
        type: String
    }
}); 

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;   

