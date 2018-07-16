const mongoose = require('../config/citi-database.config');

const citiDepartmentSchema = mongoose.Schema({
    name:{type: String, required: true, unique: true}
});

const citiDepartmentModel = mongoose.model('citi_department',citiDepartmentSchema);

module.exports = citiDepartmentModel;