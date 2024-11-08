const express = require('express')
const router = express.Router()
const usreModel = require('../models/user-model')

router.get("/", function(req, res){
    res.send("hey")
})

router.post("/register", async function(req, res){
    try{
    let (email, password, fullname) = req.body
    let user = await userModel.create({
        email,
        password,
        fullname,
    })
}
    catch(err) {
    console.log(err.message);
    
    }
})


module.exports = router