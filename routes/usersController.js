const express = require('express')
const router = express.Router()
const {UserModel} = require('../db/Schema')

router.get('/', async (req, res)=>{
    const users = await UserModel.find({})
    res.json(users)
})


router.post('/', async (req, res)=>{
    try{ console.log(req.body)
    const newuser = new UserModel(req.body.user)
    const saved = await newuser.save()
    res.json(saved)
    } catch (err){
        res.send(err)
    }
})
module.exports = router;