
const express=require('express');
const { registerUser, loginUser } = require('../../controllers/auth/userController');


const router=express.Router();



// register

router.post('/registration', registerUser);
router.post('/login',loginUser);


module.exports=router;