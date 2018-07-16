const mongoose = require('../config/citi-database.config');

const citiProgramSchema = mongoose.Schema({
    name:{type: String, required: true, unique: true}
});

const citiProgramModel = mongoose.model('citi_program',citiProgramSchema);

module.exports = citiProgramModel;