require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./src/config/db");

const postoRoutes = require("./src/routes/postoRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/postos", postoRoutes);

app.get("/", (req, res) => {
  res.send("API FLUI funcionando ⚡");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});