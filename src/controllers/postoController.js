const Posto = require("../models/posto");

const criarPosto = async (req, res) => {
  try {
    const novoPosto = await Posto.create(req.body);

    res.status(201).json(novoPosto);
  } catch (error) {
    res.status(500).json({
      erro: error.message,
    });
  }
};

const listarPostos = async (req, res) => {
  try {
    const postos = await Posto.find();

    res.status(200).json(postos);
  } catch (error) {
    res.status(500).json({
      erro: error.message,
    });
  }
};

const atualizarPosto = async (req, res) => {
  try {
    const postoAtualizado = await Posto.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(postoAtualizado);
  } catch (error) {
    res.status(500).json({
      erro: error.message,
    });
  }
};

const deletarPosto = async (req, res) => {
  try {
    await Posto.findByIdAndDelete(req.params.id);

    res.status(200).json({
      mensagem: "Posto deletado com sucesso",
    });
  } catch (error) {
    res.status(500).json({
      erro: error.message,
    });
  }
};

module.exports = {
  criarPosto,
  listarPostos,
  atualizarPosto,
  deletarPosto,
};