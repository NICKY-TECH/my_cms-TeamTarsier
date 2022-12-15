const path=require('path');

const express=require('express');

const {unAuthenticate}=require(path.join(__dirname,'..','Authentication','Authenticate'));

const logoutRoute=express.Router();

logoutRoute.get('/logot',unAuthenticate);

module.exports={
    logoutRoute
}