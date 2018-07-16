const express = require('express');
const router = express.Router();
const CitiProgram = require('../model/citi-program.model');

const objectId = require('mongoose').Types.ObjectId; 

router.get('/',(req,res,next) =>{
    CitiProgram.find()
    .exec()
    .then(data => {
        res.json(data);
    })
    .catch(next);
});

router.post('/',(req,res,next) =>{
    const citiProgram = new CitiProgram({
        name:req.body.name
    })    
    citiProgram.save()
    .then(data => {
        res.json({status:true,message:'CitiProgram created successfully'});
    })
    .catch(next);
});

router.put('/:id',(req,res,next) =>{
    if(!objectId.isValid(req.params.id)){
        return res.json({status:false,message:'Invalid object Id please try again'});
    }else{
        const citiProgram = {
            name:req.body.name
        };
        CitiProgram.findByIdAndUpdate(req.params.id,{$set:citiProgram},{new:true})
        .exec()
        .then(data =>{
            res.json({status:true,message:'CitiProgram updated successfully'});
        })
        .catch(next);
    }
});

router.delete('/:id',(req,res,next) =>{
    if(!objectId.isValid(req.params.id)){
        return res.json({status:false,message:'Invalid object Id please try again'});
    }else{
        CitiProgram.findByIdAndRemove(req.params.id)
        .exec()
        .then(data =>{
            res.json({status:true,message:'CitiProgram deleted successfully'});
        })
        .catch(next);
    }    
});

module.exports = router;