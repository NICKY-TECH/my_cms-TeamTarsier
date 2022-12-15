const path=require('path');

const {Authenticate}=require(path.join(__dirname,'..','Authentication','Authenticate'));

const userDashboardController=require(path.join(__dirname,'..','Controller','userDashboard.controller'))

const express=require('express');

const userDashboard=express.Router();

userDashboard.get('/maisout/userdashboard',Authenticate,userDashboardController);

module.exports={
    userDashboard
}