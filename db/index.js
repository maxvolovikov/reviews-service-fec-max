const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/FECreviews');
module.exports = db;