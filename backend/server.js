require('dotenv').config();

const path=require('path');

const expressSession=require('express-session');

const express= require('express');

const mongoConnect=require('connect-mongo');

const cookieParser=require('cookie-parser');

const passportSetup=require(path.join(__dirname,'.','Authentication','Authentication.with.google'));

const app=express();

app.use(expressSession({
    name:"auth",
    secret:process.env.SESSION_SECRET,
    resave: false,
    store: mongoConnect.create({
    mongoUrl: `mongodb+srv://JUSTINA:${process.env.PASSWORD}@project.de4thmz.mongodb.net/MAISOUT?retryWrites=true&w=majority`,
    touchAfter: 72*3600,
    secret:process.env.SESSION_SECRET,
}),
  saveUninitialized: false,
  cookie:{
    maxAge:1000*60*60*72
  }


}))


const {dbConnection}=require(path.join(__dirname,'db.connection','db.connection'));

const {registerRoute}=require(path.join(__dirname,'Routes','register.routes'));

const {loginRoute}=require(path.join(__dirname,'Routes','login.routes'));

const {logoutRoute}=require(path.join(__dirname,'Routes','logout.routes'));

app.use(express.json());

app.use(cookieParser());

app.use(registerRoute);

app.use(loginRoute);

app.use(logoutRoute);

const PORT=process.env.PORT||5000;


app.listen(PORT,()=>{
    console.log(`listening at PORT ${PORT}`);
})




