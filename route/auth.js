
const express = require('express');
const User = require('../database/models.js');
const router = express.Router();
const passportLocalMongoose = require('passport-local-mongoose');
const passport = require('passport');
const _ = require('lodash');
const e = require('express');




router.get("/home", function (req, res) {
    if (req.isAuthenticated()) { 
        res.status(200).send(req.user);
        
    } else {
        res.status(401).json({error:"Unauthenticated user need to login first"});
    }
});
router.get("/about", function (req, res) {
    if (req.isAuthenticated()) { 
        res.status(200).send(req.user);
    } else {
        res.status(401).json({error:"Unauthenticated user need to login first"});
    }

});

router.get("/contact", function (req, res) {
    if (req.isAuthenticated()) {  
        res.status(200).send(req.user);
    } else {
        res.status(401).json({error:"Unauthenticated user need to login first"});
    }

});




router.post("/register", function (req, res) {
    const {email, number, work, password } = req.body;
    const  name= _.capitalize(req.body.name);
   

        User.findOne({ $and:[{email:req.body.email},{number:req.body.number}]},function(err,doc){
            if(err){
                console.log(err);
                res.status(400).json({err:err});

            }else if(doc){
               
                  res.status(400).json({err:"user already present"});
            }else{
                const  newusers = new User({ name, email, number, work, password });

                User.register(newusers, password, function (err, user) {
                    if (err) {
                         res.json({ success: false, message: "Your account could not be saved. Error: ", err })
                    } else {
        
                        passport.authenticate("local")(req, res, function () {
                            res.status(200).json({ message: "don" });
                            console.log(res);
        
                        });
        
                    }
                });
            }
        });

      

    });



// router.post('/signin', passport.authenticate('local', { failureRedirect: '/signin' }),
//     function (req, res) {
//         res.redirect('/about');

//     });


router.post('/signin' , function(req,res){
   
    const user=new User({
        username:req.body.email,
        password:req.body.password
    });

    // console.log(user);
     req.login(user,function(err){
          if(err){
             res.status(400).json({ error: "invalid credentials" });
          } else {
              
               passport.authenticate("local")(req, res, function () {
               
               res.status(200).json({ message: "don" });
               
          } );
        }     

});
});



router.post("/contact",  function(req,res){
    const {name,email,number,message}=req.body;
   
    if(!name || !email || !number || !message){
         res.status(401).json({error:"please fill all the details"});
    }else {
         User.findOne({email:req.body.email},function(err,doc){
          if(!err){
              if(doc){
               
                     doc.messages=doc.messages.concat({ message:message});
                   
                       doc.save();
                     res.status(200).json({message:"save message"});
                    }else{
                        res.status(400).json({error:"document not found"});
                    }
                }
                else{
                    console.log(err);
                }
              });
          }
      });


      router.get('/logout', function(req, res){
         
        req.logout();
        res.status(200).send("logout ");
      }); 





module.exports = router;