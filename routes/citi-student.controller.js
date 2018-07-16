const express = require('express');
const router = express.Router();
const CitiStudent = require('../model/citi-student.model');

const objectId = require('mongoose').Types.ObjectId; 

router.get('/',(req,res,next) =>{
    CitiStudent.find()
    .exec()
    .then(data => {
        res.json(data);
    })
    .catch(next);
});

router.post('/',(req,res,next) =>{
    const citiStudent = new CitiStudent({
        name:req.body.name
    })    
    citiStudent.save()
    .then(data => {
        res.json({status:true,message:'CitiStudent created successfully'});
    })
    .catch(next);
});

router.put('/:id',(req,res,next) =>{
    if(!objectId.isValid(req.params.id)){
        return res.json({status:false,message:'Invalid object Id please try again'});
    }else{
        const citiStudent = {
            name:req.body.name
        };
        CitiStudent.findByIdAndUpdate(req.params.id,{$set:citiStudent},{new:true})
        .exec()
        .then(data =>{
            res.json({status:true,message:'CitiStudent updated successfully'});
        })
        .catch(next);
    }
});

router.delete('/:id',(req,res,next) =>{
    if(!objectId.isValid(req.params.id)){
        return res.json({status:false,message:'Invalid object Id please try again'});
    }else{
        CitiStudent.findByIdAndRemove(req.params.id)
        .exec()
        .then(data =>{
            res.json({status:true,message:'CitiStudent deleted successfully'});
        })
        .catch(next);
    }    
});

module.exports = router;