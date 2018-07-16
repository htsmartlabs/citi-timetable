const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/citi_timetable_db',{ useNewUrlParser: true },err => {
    !err ? console.log('Mongodb connected') : console.log(err);
});

module.exports = mongoose;