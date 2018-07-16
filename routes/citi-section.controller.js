const express = require('express');
const router = express.Router();
const CitiSection = require('../model/citi-section.model');

const objectId = require('mongoose').Types.ObjectId; 

router.get('/',(req,res,next) =>{
    CitiSection.find()
    .exec()
    .then(data => {
        res.json(data);
    })
    .catch(next);
});

router.post('/',(req,res,next) =>{
    const citiSection = new CitiSection({
        name:req.body.name
    })    
    citiSection.save()
    .then(data => {
        res.json({status:true,message:'CitiSection created successfully'});
    })
    .catch(next);
});

router.put('/:id',(req,res,next) =>{
    if(!objectId.isValid(req.params.id)){
        return res.json({status:false,message:'Invalid object Id please try again'});
    }else{
        const citiSection = {
            name:req.body.name
        };
        CitiSection.findByIdAndUpdate(req.params.id,{$set:citiSection},{new:true})
        .exec()
        .then(data =>{
            res.json({status:true,message:'CitiSection updated successfully'});
        })
        .catch(next);
    }
});

router.delete('/:id',(req,res,next) =>{
    if(!objectId.isValid(req.params.id)){
        return res.json({status:false,message:'Invalid object Id please try again'});
    }else{
        CitiSection.findByIdAndRemove(req.params.id)
        .exec()
        .then(data =>{
            res.json({status:true,message:'CitiSection deleted successfully'});
        })
        .catch(next);
    }    
});

module.exports = router;