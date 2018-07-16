const express = require('express');
const router = express.Router();
const CitiTimeSlot = require('../model/citi-time-slot.model');

const objectId = require('mongoose').Types.ObjectId; 

router.get('/',(req,res,next) =>{
    CitiTimeSlot.find()
    .populate('day_id')
    .populate('room_id')
    .populate('time_id')
    .exec()
    .then(data => {
        res.json(data);
    })
    .catch(next);
});

router.post('/',(req,res,next) =>{
    const citiTimeSlot = new CitiTimeSlot({
        day_id:req.body.day_id,
        room_id:req.body.room_id,
        time_id:req.body.time_id
    })    
    citiTimeSlot.save()
    .then(data => {
        res.json({status:true,message:'CitiTimeSlot created successfully'});
    })
    .catch(next);
});

router.put('/:id',(req,res,next) =>{
    if(!objectId.isValid(req.params.id)){
        return res.json({status:false,message:'Invalid object Id please try again'});
    }else{
        const citiTimeSlot = {
            day_id:req.body.day_id,
            room_id:req.body.room_id,
            time_id:req.body.time_id
        };
        CitiTimeSlot.findByIdAndUpdate(req.params.id,{$set:citiTimeSlot},{new:true})
        .exec()
        .then(data =>{
            res.json({status:true,message:'CitiTimeSlot updated successfully'});
        })
        .catch(next);
    }
});

router.delete('/:id',(req,res,next) =>{
    if(!objectId.isValid(req.params.id)){
        return res.json({status:false,message:'Invalid object Id please try again'});
    }else{
        CitiTimeSlot.findByIdAndRemove(req.params.id)
        .exec()
        .then(data =>{
            res.json({status:true,message:'CitiTimeSlot deleted successfully'});
        })
        .catch(next);
    }    
});

module.exports = router;