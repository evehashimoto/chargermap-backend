const express = require("express");

const router = express.Router();

const {
  criarPosto,
  listarPostos,
  atualizarPosto,
  deletarPosto,
} = require("../controllers/postoController");

router.post("/", criarPosto);

router.get("/", listarPostos);

router.put("/:id", atualizarPosto);

router.delete("/:id", deletarPosto);

module.exports = router;