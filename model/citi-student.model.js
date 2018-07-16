const mongoose = require('../config/citi-database.config');

const citiStudentSchema = mongoose.Schema({
    name:{type: String, required: true, unique: true}
});

const citiStudentModel = mongoose.model('citi_student',citiStudentSchema);

module.exports = citiStudentModel;