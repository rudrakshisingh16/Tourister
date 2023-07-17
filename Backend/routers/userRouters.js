const express = require('express');
const router = express.Router();
const Model = require('../models/userModel')

router.get('/add', (req,res) => {

// clint side se data server side lane ke line
   console.log(req.body);
   new Model(red.body).save()
   .then((result) =>{
       res.json(result);
   }).catch((err)=> {
    res.status(500).json(err);
   });
    
});
  
   router.get('/getbyemail/:email',(reg, res) =>{
    console.log(req.params.email);
    Model.find({email : req.params.email})
    .then((result) => {
        res.json(result);
    })
        .catch((err)=> {
        res.status(500).json(err);
    });
   })

   router.get('/getbyemail/:email',(reg, res) =>{
    console.log(req.params.id);
    Model.findById({email : req.params.id})
    .then((result) => {
        res.json(result);
    })
        .catch((err)=> {
        res.status(500).json(err);
    });
   })

   router.delete('/delete/:id',(reg, res) =>{
    console.log(req.params.id);
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result);
    })
        .catch((err)=> {
        res.status(500).json(err);
    });
   })

   router.put('/delete/:id',(reg, res) =>{
    console.log(req.params.id);
    Model.findByIdAndUpdate(req.params.id, req.body,{new: true})
    .then((result) => {
        res.json(result);
    })
        .catch((err)=> {
        res.status(500).json(err);
    });
   });

// getall
// getbyid
// update
// delete

router.get("/authenticate", (req,res)=> {

    Model.findOne(req.body)
    .then((result) => {
    if(result !== null){
        
    }
        res.json(result);
    })
    .catch((err) => {
     res.status(500).json(err);
    });
})

module.exports = router;