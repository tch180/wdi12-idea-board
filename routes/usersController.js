const express = require('express')
const router = express.Router()
const {UserModel} = require('../db/Schema')

router.get('/', async (req, res)=>{
    const users = await UserModel.find({})
    res.json(users)
})

module.exports = router;