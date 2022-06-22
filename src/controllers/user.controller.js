const express = require('express');
const User = require('../models/user.model')
const router = express.Router()


router.get('/',async(req,res)=>{

    try{
        const user = await User.find().lean().exec()
        res.status(200).send(user)
    }
    catch(err){
        res.status(500).send(err.message)
    }
})


router.post("/",async(req,res)=>{
    try{
        const user = await User.create(req.body)
        res.status(201).send(user)
    }
    catch(err){
        res.status(400).send(err.message)

    }
    
})

module.exports = router