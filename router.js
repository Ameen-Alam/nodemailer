var router=require('express').Router();
var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
//you need to create an account on sendgrid.com for email sending
router.post('/email',(req,res,next)=>{
  console.log(req.body);  
  var port=process.env.PORT
  var options = {
        auth: {
          api_user: 'ameenalam222',//your sendgrid username
          api_key: 'doblier8888' //user sendgrid password
        }
      }
      
      var client = nodemailer.createTransport(sgTransport(options));
      
      var email = {
        from: req.body.email,
        to: 'tenders@thechurchill-group.com',
        subject: req.body.title,
        text: `${req.body.name} \n ${req.body.phone} \n  ${req.body.message}` ,
     
      };
      
      client.sendMail(email, function(err, info){
          if (err){
            console.log(err);
          }
          else {
            console.log('Message sent: ' + info.message
          );
          }
      });
})
router.get("/",(req,res,next)=>{
  res.send({message:'App is runing on heroku '})
})
module.exports=router;