const Pet = require("../models/Pet");

const express = require("express");

const router = express.Router();

router.get("/pets", async (req, res) => {
    try {
        const pets = await Pet.find();

        res.json(pets);
    }   catch (error) {
        res.status(400).json({
            mensagem: "Erro ao buscar pets",
            erro: error.message
        });
    }
});

router.get("/pets/:id", async (req, res) => {
    try {
        const pet = await Pet.findById(req.params.id);

        res.json(pet);
    }   catch (error) {
        res.status(400).json({
            mensagem: "Erro ao buscar pet",
            erro: error.message
        });
    }
});

router.put("/pets/:id", async (req, res) => {
    try {
        const pet = await Pet.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(pet);
    }   catch (error) {
            res.status(400).json({
                mensagem: "Erro ao atualizar pet",
                erro: error.message
            });
    }
});

router.delete("/pets/:id", async (req, res) => {
    try {
        const pet = await Pet.findByIdAndDelete(req.params.id);

        res.json(pet);
    }   catch (error) {
            res.status(400).json({
                mensagem: "Erro ao deletar pet",
                erro: error.message
        });
    }
});

router.post("/pets", async (req, res) => {
    try {
        const pet = await Pet.create(req.body);
        
        res.status(201).json(pet); 
    } catch (error) {
        res.status(400).json({
            mensagem: "Erro ao cadastrar pet",
            erro: error.message
        });
    }   
});

module.exports = router;  

