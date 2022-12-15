require('dotenv').config();
const path=require('path');
const {user}=require(path.join(__dirname,'..','Model','userSchema.model'));
const bcrypt=require('bcrypt');
const {generateFromEmail}=require('unique-username-generator')
const  {tokenCreation}=require(path.join(__dirname,'..','Authentication','Authenticate'));
const {validationResult}=require('express-validator');

// the register function allows a user register without a sign on service like google

async function registerWithMaisout(req,res){
const {email,username,password}=req.body;
user.findOne({emailAddress:email}, async function(error,result){
    if(error){
       res.status(500).json({
        success:false,
        error:[],
        message:'an error occurred while processing your request',
        data:{}
       })
    }else if(result){
       return res.status(400).json({
        success:false,
        error:[],
        message:'A user with this email already exists',
        data:{}
    })

      
       
        }else if(!result){
           const errors=validationResult(req);
           if(!errors.isEmpty()){
            res.status(400).json({
                success:false,
                error:errors.array(),
                message:"Invalid input",
                data:{}
            });

           }else{
            const passwordString=password.toString();
            const hashed=await bcrypt.hash(passwordString,12);
            const userGenerated=generateFromEmail(email,5);
            const newUser= await user.create({
                username:userGenerated,
                emailAddress:email,
                password:hashed
            })
            req.session.userId=newUser._id;
            res.redirect('/maisout/userdashboard');
           }
        }
        })
        }
            
        



module.exports={
    registerWithMaisout
}