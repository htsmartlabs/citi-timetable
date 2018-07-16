const express = require('express');
const router = express.Router();
const CitiYear = require('../model/citi-year.model');

const objectId = require('mongoose').Types.ObjectId; 

router.get('/',(req,res,next) =>{
    CitiYear.find()
    .populate({path:'terms._id'})
    .populate({path:'terms.departments._id'})
    .populate({path:'terms.departments.programs._id'})
    .populate({path:'terms.departments.programs.courses._id'})
    .populate({path:'terms.departments.programs.courses.sections._id'})
    .populate({path:'terms.departments.programs.courses.sections.employe_id'})
    .populate({path:'terms.departments.programs.courses.sections.students._id'})
    .exec()
    .then(data => {
        res.json(data);
    })
    .catch(next);
});

router.post('/',(req,res,next) =>{
    const citiYear = new CitiYear({
        name:req.body.name,
        terms:req.body.terms
    })    
    citiYear.save()
    .then(data => {
        res.json({status:true,message:'CitiYear created successfully'});
    })
    .catch(next);
});

router.put('/:id',(req,res,next) =>{
    if(!objectId.isValid(req.params.id)){
        return res.json({status:false,message:'Invalid object Id please try again'});
    }else{
        const citiYear = {
            name:req.body.name,
            terms:req.body.terms
        };
        CitiYear.findByIdAndUpdate(req.params.id,{$set:citiYear},{new:true})
        .exec()
        .then(data =>{
            res.json({status:true,message:'CitiYear updated successfully'});
        })
        .catch(next);
    }
});

router.delete('/:id',(req,res,next) =>{
    if(!objectId.isValid(req.params.id)){
        return res.json({status:false,message:'Invalid object Id please try again'});
    }else{
        CitiYear.findByIdAndRemove(req.params.id)
        .exec()
        .then(data =>{
            res.json({status:true,message:'CitiYear deleted successfully'});
        })
        .catch(next);
    }    
});

module.exports = router;