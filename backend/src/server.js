const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const petsRoutes = require("./routes/petsRoutes");
const errorMiddleware = require("./middlewares/errorMiddleware");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use(petsRoutes);

app.get("/", (req, res) => {
    res.send("Servidor atualizado pelo nodemon");
});

app.use(errorMiddleware);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
