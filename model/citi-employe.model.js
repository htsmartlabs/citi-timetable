const mongoose = require('../config/citi-database.config');

const citiEmployeSchema = mongoose.Schema({
    name:{type: String, required: true, unique: true}
});

const citiEmployeModel = mongoose.model('citi_employe',citiEmployeSchema);

module.exports = citiEmployeModel;