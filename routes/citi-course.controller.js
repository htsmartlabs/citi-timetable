const express = require('express');
const router = express.Router();
const CitiCourse = require('../model/citi-course.model');

const objectId = require('mongoose').Types.ObjectId; 

router.get('/',(req,res,next) =>{
    CitiCourse.find()
    .exec()
    .then(data => {
        res.json(data);
    })
    .catch(next);
});

router.post('/',(req,res,next) =>{
    const citiCourse = new CitiCourse({
        name:req.body.name
    })    
    citiCourse.save()
    .then(data => {
        res.json({status:true,message:'CitiCourse created successfully'});
    })
    .catch(next);
});

router.put('/:id',(req,res,next) =>{
    if(!objectId.isValid(req.params.id)){
        return res.json({status:false,message:'Invalid object Id please try again'});
    }else{
        const citiCourse = {
            name:req.body.name
        };
        CitiCourse.findByIdAndUpdate(req.params.id,{$set:citiCourse},{new:true})
        .exec()
        .then(data =>{
            res.json({status:true,message:'CitiCourse updated successfully'});
        })
        .catch(next);
    }
});

router.delete('/:id',(req,res,next) =>{
    if(!objectId.isValid(req.params.id)){
        return res.json({status:false,message:'Invalid object Id please try again'});
    }else{
        CitiCourse.findByIdAndRemove(req.params.id)
        .exec()
        .then(data =>{
            res.json({status:true,message:'CitiCourse deleted successfully'});
        })
        .catch(next);
    }    
});

module.exports = router;