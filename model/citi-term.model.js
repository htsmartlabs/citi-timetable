const mongoose = require('../config/citi-database.config');

const citiTermSchema = mongoose.Schema({
    name:{type: String, required: true, unique: true}
});

const citiTermModel = mongoose.model('citi_term',citiTermSchema);

module.exports = citiTermModel;