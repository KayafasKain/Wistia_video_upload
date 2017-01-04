var express = require('express');
var router = express.Router();
var path = require('path');
var Mailgun = require('mailgun-js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// functions

	//customer interaction
		//recieve and send message

			//Your api key, from Mailgun’s Control Panel
			var api_key = 'key-bb9e58d2a108cd507234a95ae93e8320';

			//Your domain, from the Mailgun Control Panel
			var domain = 'sandbox074d30e1f03646a180311a398da68b0a.mailgun.org';

			//Your sending email address
			var from_who = 'DevRoom@email.com';

			router.post('/send_mail', function(req, res){
				var req_body = req.body;

				    var mailgun = new Mailgun({apiKey: api_key, domain: domain});

				    console.log(req_body);


				    var data = {
				    //Specify email data
				      from: req_body.email,
				    //The email to contact
				      to: "1topelena@mail.ru",
				    //Subject and text data  
				      subject: req_body.subject,
				      html: "Client name is:" + req_body.name  +  "<br> His email:"+  req_body.email  +"<br> " + " He asks about:  <br>"+ req_body.message
				    }				    

				    //Invokes the method to send emails given the above data with the helper library
				    mailgun.messages().send(data, function (err, body) {
				        //If there is an error, render the error page
				        if (err) {
				            
				            console.log("got an error: ", err);


							res.json({
								result: "Message not sended!"
							});					            

				        }else{

							res.json({
								result: "Message sended!"
							});	
				        }

				    });

		

			});





module.exports = router;




