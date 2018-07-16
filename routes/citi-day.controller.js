const express = require('express');
const router = express.Router();
const CitiDay = require('../model/citi-day.model');

const objectId = require('mongoose').Types.ObjectId; 

router.get('/',(req,res,next) =>{
    CitiDay.find()
    .exec()
    .then(data => {
        res.json(data);
    })
    .catch(next);
});

router.post('/',(req,res,next) =>{
    const citiDay = new CitiDay({
        name:req.body.name
    })    
    citiDay.save()
    .then(data => {
        res.json({status:true,message:'CitiDay created successfully'});
    })
    .catch(next);
});

router.put('/:id',(req,res,next) =>{
    if(!objectId.isValid(req.params.id)){
        return res.json({status:false,message:'Invalid object Id please try again'});
    }else{
        const citiDay = {
            name:req.body.name
        };
        CitiDay.findByIdAndUpdate(req.params.id,{$set:citiDay},{new:true})
        .exec()
        .then(data =>{
            res.json({status:true,message:'CitiDay updated successfully'});
        })
        .catch(next);
    }
});

router.delete('/:id',(req,res,next) =>{
    if(!objectId.isValid(req.params.id)){
        return res.json({status:false,message:'Invalid object Id please try again'});
    }else{
        CitiDay.findByIdAndRemove(req.params.id)
        .exec()
        .then(data =>{
            res.json({status:true,message:'CitiDay deleted successfully'});
        })
        .catch(next);
    }    
});

module.exports = router;