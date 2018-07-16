const mongoose = require('../config/citi-database.config');

const citiCourseSchema = mongoose.Schema({
    name:{type: String, required: true, unique: true}
});

const citiCourseModel = mongoose.model('citi_course',citiCourseSchema);

module.exports = citiCourseModel;