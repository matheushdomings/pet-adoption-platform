const { 
    getPets,
    getPetById,
    createPet,
    updatePet,
    deletePet
} = require("../controllers/petController");

const Pet = require("../models/Pet");

const express = require("express");

const router = express.Router();

router.get("/pets", getPets);

router.get("/pets/:id", getPetById);

router.post("/pets", createPet);

router.put("/pets/:id", updatePet);

router.delete("/pets/:id", deletePet);

module.exports = router;  

