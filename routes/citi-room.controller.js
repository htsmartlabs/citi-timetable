const express = require('express');
const router = express.Router();
const CitiRoom = require('../model/citi-room.model');

const objectId = require('mongoose').Types.ObjectId; 

router.get('/',(req,res,next) =>{
    CitiRoom.find()
    .exec()
    .then(data => {
        res.json(data);
    })
    .catch(next);
});

router.post('/',(req,res,next) =>{
    const citiRoom = new CitiRoom({
        name:req.body.name
    })    
    citiRoom.save()
    .then(data => {
        res.json({status:true,message:'CitiRoom created successfully'});
    })
    .catch(next);
});

router.put('/:id',(req,res,next) =>{
    if(!objectId.isValid(req.params.id)){
        return res.json({status:false,message:'Invalid object Id please try again'});
    }else{
        const citiRoom = {
            name:req.body.name
        };
        CitiRoom.findByIdAndUpdate(req.params.id,{$set:citiRoom},{new:true})
        .exec()
        .then(data =>{
            res.json({status:true,message:'CitiRoom updated successfully'});
        })
        .catch(next);
    }
});

router.delete('/:id',(req,res,next) =>{
    if(!objectId.isValid(req.params.id)){
        return res.json({status:false,message:'Invalid object Id please try again'});
    }else{
        CitiRoom.findByIdAndRemove(req.params.id)
        .exec()
        .then(data =>{
            res.json({status:true,message:'CitiRoom deleted successfully'});
        })
        .catch(next);
    }    
});

module.exports = router;