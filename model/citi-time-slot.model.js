const mongoose = require('../config/citi-database.config');


const citiTimeSlotSchema = mongoose.Schema({
    day_id:{
        type: mongoose.Schema.Types.ObjectId, 
        ref:'citi_day' 
    },
    room_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'citi_room'
    },
    time_id:{
        type: mongoose.Schema.Types.ObjectId, 
        ref:'citi_time'
    }
});

const citiTimeSlotModel = mongoose.model('citi_time_slot',citiTimeSlotSchema);

module.exports = citiTimeSlotModel;