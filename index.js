//System libraries
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

//take the system port or take 3000 if not available
const port = process.env.port || 3000;

//declaring the path for user routes
const citiYear = require('./routes/citi-year.controller');
const citiTerm = require('./routes/citi-term.controller');
const citiDepartment = require('./routes/citi-department.controller');
const citiProgram = require('./routes/citi-program.controller');
const citiCourse = require('./routes/citi-course.controller');
const citiSection = require('./routes/citi-section.controller');
const citiEmploye = require('./routes/citi-employe.controller');
const citiStudent = require('./routes/citi-student.controller');
const citiDay = require('./routes/citi-day.controller');
const citiRoom = require('./routes/citi-room.controller');
const citiTime = require('./routes/citi-time.controller');
const citiTimeSlot = require('./routes/citi-time-slot.controller');


//Initializing the node server
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

//redirecting to the required routes
app.use('/citi-year',citiYear);
app.use('/citi-term',citiTerm);
app.use('/citi-department',citiDepartment);
app.use('/citi-program',citiProgram);
app.use('/citi-course',citiCourse);
app.use('/citi-section',citiSection);
app.use('/citi-employe',citiEmploye);
app.use('/citi-student',citiStudent);
app.use('/citi-day',citiDay);
app.use('/citi-room',citiRoom);
app.use('/citi-time',citiTime);
app.use('/citi-time-slot',citiTimeSlot);

//error handling if the routes fails
app.use((error,req,res,next) => {
    res.json({status:false,msg:''+error});
});

//Server is listening on the port
app.listen(port,()=>{
    console.log("Server has started on port "+port);
});