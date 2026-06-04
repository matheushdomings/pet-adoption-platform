const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    especie: {
        type: String,
        required: true
    }   
}); 

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;   

