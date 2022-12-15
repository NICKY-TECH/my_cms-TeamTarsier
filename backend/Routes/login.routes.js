const path=require('path');
const {verifyMiddleware}=require(path.join(__dirname,'..','Authentication','Authenticate'));
const {login}=require(path.join(__dirname,'..','Controller','login.controller'));
const express=require('express');
const passport=require('passport');
const loginRoute=express.Router();

// loginRoute.post('/login',login);

loginRoute.get('/auth/google',passport.authenticate('google',{
    scope:['profile']
}));

module.exports={
    loginRoute
}

