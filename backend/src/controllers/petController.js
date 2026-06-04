const Pet = require("../models/Pet");

const getPets = async (req, res) => {
    try {
        const pets = await Pet.find();

        res.json(pets);

    } catch (error) {
        res.status(500).json({
            mensagem: "Erro ao buscar pets",
            erro: error.message
        });
    }
};

const getPetById = async (req, res) => {
    try {
        const pet = await Pet.findById(req.params.id);

        if (!pet) {
            return res.status(404).json({
                mensagem: "Pet não encontrado"
            });
        }

        res.json(pet);

    } catch (error) {
        res.status(500).json({
            mensagem: "Erro ao buscar pet",
            erro: error.message
        });
    }
};

const createPet = async (req, res) => {
    try {
        const pet = await Pet.create(req.body);

        res.status(201).json(pet);

    } catch (error) {
        res.status(400).json({
            mensagem: "Erro ao cadastrar pet",
            erro: error.message
        });
    }
};

const updatePet = async (req, res) => {
    try {
        const pet = await Pet.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!pet) {
            return res.status(404).json({
                mensagem: "Pet não encontrado"
            });
        }

        res.json(pet);

    } catch (error) {
        res.status(400).json({
            mensagem: "Erro ao atualizar pet",
            erro: error.message
        });
    }
};

const deletePet = async (req, res) => {
    try {
        const pet = await Pet.findByIdAndDelete(req.params.id);

        if (!pet) {
            return res.status(404).json({
                mensagem: "Pet não encontrado"
            });
        }

        res.json({
            mensagem: "Pet deletado com sucesso",
            pet
        });

    } catch (error) {
        res.status(400).json({
            mensagem: "Erro ao deletar pet",
            erro: error.message
        });
    }
};

module.exports = {
    getPets,
    getPetById,
    createPet,
    updatePet,
    deletePet
};