const express = require('express');
const User = require('../models/user.model')
const router = express.Router()


router.get('/',async(req,res)=>{

    try{
        const data = await User.find().lean().exec()
        const flattenJSON = (obj = {}, res = {}, extraKey = '') => {
            for(let key in obj){
               if(typeof obj[key] !== 'object' && typeof obj[key] !== 'function'){
                  res[extraKey + key] = typeof(obj[key])
        
               }
               
               else{
                if(key === '_id' || key === '__v' || key === 'createdAt' || key === 'updatedAt' || key === 'dob'){
                    res[extraKey + key] = 'number'
                }
                  flattenJSON(obj[key], res, `${extraKey}${key}.`);
               };
            };
            return res;
         };
         res.send(flattenJSON(data));
    }catch(err){
        res.status(500).send(err)
    }
}
)
         



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
