const mongoose = require("mongoose");

const postoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },

  cidade: {
    type: String,
    required: true,
  },

  endereco: {
    type: String,
    required: true,
  },

  conector: {
    type: String,
    required: true,
  },

  potencia: {
    type: String,
    required: true,
  },

  disponibilidade: {
    type: String,
    required: true,
  },

  avaliacao: {
    type: Number,
    default: 0,
  },

  latitude: {
    type: Number,
    required: true,
  },

  longitude: {
    type: Number,
    required: true,
  },

  imagem: {
    type: String,
  }
});

module.exports = mongoose.model("Posto", postoSchema);