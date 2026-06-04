const Pet = require("../models/Pet");

const getPets = async (req, res, next) => {
    try {
        const pets = await Pet.find();

        res.json(pets);

    } catch (error) {
        next(error);
    }
};

const getPetById = async (req, res, next) => {
    try {
        const pet = await Pet.findById(req.params.id);

        if (!pet) {
            return res.status(404).json({
                mensagem: "Pet não encontrado"
            });
        }

        res.json(pet);

    } catch (error) {
        next(error);
    }
};

const createPet = async (req, res, next) => {
    try {
        const pet = await Pet.create(req.body);

        res.status(201).json(pet);

    } catch (error) {
        next(error);
    }
};

const updatePet = async (req, res, next) => {
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
        next(error);
    }
};

const deletePet = async (req, res, next) => {
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
        next(error);
    }
};

module.exports = {
    getPets,
    getPetById,
    createPet,
    updatePet,
    deletePet
};