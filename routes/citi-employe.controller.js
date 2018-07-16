const express = require('express');
const router = express.Router();
const CitiEmploye = require('../model/citi-employe.model');

const objectId = require('mongoose').Types.ObjectId; 

router.get('/',(req,res,next) =>{
    CitiEmploye.find()
    .exec()
    .then(data => {
        res.json(data);
    })
    .catch(next);
});

router.post('/',(req,res,next) =>{
    const citiEmploye = new CitiEmploye({
        name:req.body.name
    })    
    citiEmploye.save()
    .then(data => {
        res.json({status:true,message:'CitiEmploye created successfully'});
    })
    .catch(next);
});

router.put('/:id',(req,res,next) =>{
    if(!objectId.isValid(req.params.id)){
        return res.json({status:false,message:'Invalid object Id please try again'});
    }else{
        const citiEmploye = {
            name:req.body.name
        };
        CitiEmploye.findByIdAndUpdate(req.params.id,{$set:citiEmploye},{new:true})
        .exec()
        .then(data =>{
            res.json({status:true,message:'CitiEmploye updated successfully'});
        })
        .catch(next);
    }
});

router.delete('/:id',(req,res,next) =>{
    if(!objectId.isValid(req.params.id)){
        return res.json({status:false,message:'Invalid object Id please try again'});
    }else{
        CitiEmploye.findByIdAndRemove(req.params.id)
        .exec()
        .then(data =>{
            res.json({status:true,message:'CitiEmploye deleted successfully'});
        })
        .catch(next);
    }    
});

module.exports = router;