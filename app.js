//jshint esversion: 6
const dotenv=require('dotenv');
const mongoose =require('mongoose');
const express= require('express');
const session=require("express-session");
const passport=require("passport");
const passportLocalMongoose= require("passport-local-mongoose");
const app=express();

dotenv.config({path:"./config.env"});




app.use(express.urlencoded({ extended: true} ));
app.use(express.json());


app.use(session({
    secret:"our little secret",
    resave:false,
    saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());

require("./database/conn.js");

const User= require('./database/models.js');


passport.use(User.createStrategy());


// passport.serializeUser(User.serializeUser());   //serailsize means create a cookies and add user details(user authenticATION) as an stuff into the cookie
// passport.deserializeUser(User.deserializeUser()); //Deserialize allow passport to crumbal the cookie and get details out of that cookie to authenticate 

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });
  
app.use(require('./route/auth.js'));
if ( process.env.NODE_ENV == "production"){

    app.use(express.static("client/build"));


}

const PORT = process.env.PORT || 5000;

app.listen(process.env.PORT,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("server is running");
    }
});
