const mongoose = require('../config/citi-database.config');

const citiSectionSchema = mongoose.Schema({
    name:{type: String, required: true, unique: true}
});

const citiSectionModel = mongoose.model('citi_section',citiSectionSchema);

module.exports = citiSectionModel;