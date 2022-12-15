const path=require('path');
const express=require('express');
const {body}=require('express-validator')
const {registerWithMaisout}=require(path.join(__dirname,'..','Controller','registration.controller'));
const registerRoute=express.Router();

registerRoute.post('/register',[
    body('email').isEmail().withMessage('invalid email'),
    body('password').isLength({min:8,max:16}).withMessage('the password field should contain a minimum of 8 characters and a maximum of 16 characters'),
],registerWithMaisout);


module.exports={
    registerRoute
}