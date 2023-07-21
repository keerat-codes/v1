const mongoose = require('mongoose');

const moodSchema = new mongoose.Schema({
  mood: String,
  lol: Number,
  luckyNumber: Number,
});

module.exports = mongoose.model('mood', moodSchema);