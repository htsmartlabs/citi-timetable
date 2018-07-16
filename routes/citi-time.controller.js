const express = require('express');
const router = express.Router();
const CitiTime = require('../model/citi-time.model');

const objectId = require('mongoose').Types.ObjectId; 

router.get('/',(req,res,next) =>{
    CitiTime.find()
    .exec()
    .then(data => {
        res.json(data);
    })
    .catch(next);
});

router.post('/',(req,res,next) =>{
    const citiTime = new CitiTime({
        name:req.body.name
    })    
    citiTime.save()
    .then(data => {
        res.json({status:true,message:'CitiTime created successfully'});
    })
    .catch(next);
});

router.put('/:id',(req,res,next) =>{
    if(!objectId.isValid(req.params.id)){
        return res.json({status:false,message:'Invalid object Id please try again'});
    }else{
        const citiTime = {
            name:req.body.name
        };
        CitiTime.findByIdAndUpdate(req.params.id,{$set:citiTime},{new:true})
        .exec()
        .then(data =>{
            res.json({status:true,message:'CitiTime updated successfully'});
        })
        .catch(next);
    }
});

router.delete('/:id',(req,res,next) =>{
    if(!objectId.isValid(req.params.id)){
        return res.json({status:false,message:'Invalid object Id please try again'});
    }else{
        CitiTime.findByIdAndRemove(req.params.id)
        .exec()
        .then(data =>{
            res.json({status:true,message:'CitiTime deleted successfully'});
        })
        .catch(next);
    }    
});

module.exports = router;