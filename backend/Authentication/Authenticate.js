function AuthenticateUser(req,res,next){
    if(req.session.userId){
        next()
    }else{
        res.redirect('/login')
    }
}

function unAuthenticate(req,res,next){
    if(req.session.userId){
        req.session.userId=null;
        res.redirect('/login')
    }else{
        res.redirect('/login')
    }
}

module.exports={
    AuthenticateUser,
    unAuthenticate
}