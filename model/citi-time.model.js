const mongoose = require('../config/citi-database.config');

const citiTimeSchema = mongoose.Schema({
    name:{type: String, required: true, unique: true}
});

const citiTimeModel = mongoose.model('citi_time',citiTimeSchema);

module.exports = citiTimeModel;