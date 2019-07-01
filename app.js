var express = require('express');
var app = express();
var path = require('path');
var client = require('twilio')('AC16d3e815a7ed429df2c342934659c5f1','42b7d87bd6020183b7d2952fd06010fd');
var firebase = require("firebase");


app.get('/', function(req, res) {
  res.type('text/plain');
  res.send('i am a beautiful butterfly');
  randomVerifyNumber()
});

app.get('/test', function(req, res) {
	var phoneNumber  = req.param('phone');
	var verifyNum = randomVerifyNumber();
	console.log(verifyNum);
	// client.sendMessage({
	// 	to: phoneNumber,
	// 	from: '+13108536780',
	// 	body: 'This is verify number for your account "' + verifyNum + '"',
		
	// }, 	function(err, data) {
	// 		if(err) {
	// 			console.log(err);
	// 			res.end(JSON.stringify({
	// 	            success: false,
	// 	            message: 'Phone number is not correct!'
	//         	}));
	// 		} else {
	// 			res.send({
	// 		        success: true,
	// 		       	verifyNum: verifyNum
	//     		});	
	// 		}
		
	// 	});
	res.send({
        success: true,
       	verifyNum: verifyNum
	});	
});

function randomVerifyNumber() {

	var verifyNum = Math.floor(Math.random() * 1000000);
   	verifyNum  += "";
   	return verifyNum;	
   
}

app.listen(3030);
console.log("Server running in: localhost:3030");





