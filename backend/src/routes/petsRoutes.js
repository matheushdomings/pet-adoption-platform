const { 
    getPets,
    getPetById,
    createPet,
    updatePet,
    deletePet
} = require("../controllers/petController");

const Pet = require("../models/Pet");
const upload = require("../config/multer")

const express = require("express");

const router = express.Router();

router.get("/pets", getPets);

router.get("/pets/:id", getPetById);

router.post("/pets", upload.single("imagem"), createPet)

router.put("/pets/:id", upload.single("imagem"), updatePet)

router.delete("/pets/:id", deletePet);

module.exports = router;  

