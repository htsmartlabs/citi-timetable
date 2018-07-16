const mongoose = require('../config/citi-database.config');

const citiYearSchema = mongoose.Schema({
    name:{type: String, required: true, unique: true},
    terms:[{
        _id:{ type: mongoose.Schema.Types.ObjectId,ref:'citi_term'},
        departments:[{
            _id:{ type: mongoose.Schema.Types.ObjectId,ref:'citi_department'},
            programs:[{ 
                _id:{ type: mongoose.Schema.Types.ObjectId,ref:'citi_program'},
                courses:[{
                    _id:{ type: mongoose.Schema.Types.ObjectId,ref:'citi_course'},
                    sections:[{
                        _id:{ type: mongoose.Schema.Types.ObjectId,ref:'citi_section'},
                        employe_id:{ type: mongoose.Schema.Types.ObjectId,ref:'citi_employe'},
                        students:[{
                            _id:{ type: mongoose.Schema.Types.ObjectId,ref:'citi_student'}
                        }]
                    }]    
                }]
            }]   
        }]
    }]
});

const citiYearModel = mongoose.model('citi_year',citiYearSchema);

module.exports = citiYearModel;