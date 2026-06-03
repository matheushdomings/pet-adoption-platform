const express = require("express");

const router = express.Router();

router.get("/pets", (req, res) => {
    res.json([
        {
            nome: "Rex",
            especie: "Cachorro"
        },
        {
            nome: "Mia",            
            especie: "Gato"
        }
    ]);
});

// router.post("/pets", (req, res) => {
//     console.log(req.body);

//     pets.push(req.body);

//     res.json({
//         mensagem: "Pet recebido com sucesso",
//         pet: req.body
//     });
// });

module.exports = router;    