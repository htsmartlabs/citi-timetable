const express = require('express');
const router = express.Router();
const CitiTerm = require('../model/citi-term.model');

const objectId = require('mongoose').Types.ObjectId; 

router.get('/',(req,res,next) =>{
    CitiTerm.find()
    .exec()
    .then(data => {
        res.json(data);
    })
    .catch(next);
});

router.post('/',(req,res,next) =>{
    const citiTerm = new CitiTerm({
        name:req.body.name
    })    
    citiTerm.save()
    .then(data => {
        res.json({status:true,message:'CitiTerm created successfully'});
    })
    .catch(next);
});

router.put('/:id',(req,res,next) =>{
    if(!objectId.isValid(req.params.id)){
        return res.json({status:false,message:'Invalid object Id please try again'});
    }else{
        const citiTerm = {
            name:req.body.name
        };
        CitiTerm.findByIdAndUpdate(req.params.id,{$set:citiTerm},{new:true})
        .exec()
        .then(data =>{
            res.json({status:true,message:'CitiTerm updated successfully'});
        })
        .catch(next);
    }
});

router.delete('/:id',(req,res,next) =>{
    if(!objectId.isValid(req.params.id)){
        return res.json({status:false,message:'Invalid object Id please try again'});
    }else{
        CitiTerm.findByIdAndRemove(req.params.id)
        .exec()
        .then(data =>{
            res.json({status:true,message:'CitiTerm deleted successfully'});
        })
        .catch(next);
    }    
});

module.exports = router;