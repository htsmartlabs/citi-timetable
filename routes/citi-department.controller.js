const express = require('express');
const router = express.Router();
const CitiDepartment = require('../model/citi-department.model');

const objectId = require('mongoose').Types.ObjectId; 

router.get('/',(req,res,next) =>{
    CitiDepartment.find()
    .exec()
    .then(data => {
        res.json(data);
    })
    .catch(next);
});

router.post('/',(req,res,next) =>{
    const citiDepartment = new CitiDepartment({
        name:req.body.name
    })    
    citiDepartment.save()
    .then(data => {
        res.json({status:true,message:'CitiDepartment created successfully'});
    })
    .catch(next);
});

router.put('/:id',(req,res,next) =>{
    if(!objectId.isValid(req.params.id)){
        return res.json({status:false,message:'Invalid object Id please try again'});
    }else{
        const citiDepartment = {
            name:req.body.name
        };
        CitiDepartment.findByIdAndUpdate(req.params.id,{$set:citiDepartment},{new:true})
        .exec()
        .then(data =>{
            res.json({status:true,message:'CitiDepartment updated successfully'});
        })
        .catch(next);
    }
});

router.delete('/:id',(req,res,next) =>{
    if(!objectId.isValid(req.params.id)){
        return res.json({status:false,message:'Invalid object Id please try again'});
    }else{
        CitiDepartment.findByIdAndRemove(req.params.id)
        .exec()
        .then(data =>{
            res.json({status:true,message:'CitiDepartment deleted successfully'});
        })
        .catch(next);
    }    
});

module.exports = router;