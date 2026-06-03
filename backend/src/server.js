const express = require("express");

const petsRoutes = require("./routes/petsRoutes");

const app = express();

app.use(express.json());

app.use(petsRoutes);

const pets = [
    {
        nome: "Rex",
        especie: "Cachorro"
    },
    {
        nome: "Mia",
        especie: "Gato"
    }
];

app.get("/", (req, res) => {
    res.send("Servidor atualizado pelo nodemon");
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});


