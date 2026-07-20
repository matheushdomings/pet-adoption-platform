const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");

const petsRoutes = require("./routes/petsRoutes");
const errorMiddleware = require("./middlewares/errorMiddleware");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173"
  })
);

app.use(petsRoutes);
app.use(authRoutes);

app.get("/", (req, res) => {
  res.send("Servidor atualizado pelo nodemon");
});

app.use(errorMiddleware);

module.exports = app;