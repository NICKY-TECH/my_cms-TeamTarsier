require('dotenv').config();
const path=require('path');
const passport=require('passport');
const googleStrategy=require('passport-google-oauth20');

passport.use(new googleStrategy({
    callbackURL:"/auth/google/callback",
    clientID:`${process.env.CLIENT_ID}`,
    clientSecret:`${process.env.CLIENT_SECRET}`
},()=>{

})
);