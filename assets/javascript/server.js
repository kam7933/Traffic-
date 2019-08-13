// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure

let twilKey = "your key here";
let ATKEY = "your AT number here";
let PORT = "your port here";

const express = require('express');
const accountSid = twilKey;
const authToken = ATKEY;




var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/api/:phonenumber', function (req, res) {
  res.send(req.params.phonenumber);
  let phonenumber = req.params.phonenumber
  const client = require('twilio')(accountSid, authToken);
  // console.log("Hello World!")
   client.messages
   .create({
      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
      from: '+your twilio number here',
      to: phonenumber
    })
   .then(message => console.log(message.sid));
})


app.listen(PORT, function(){
  console.log(`SERVER IS RUNNING ON ${PORT}`);
})



// let sendText = function (){
 
// }
// Node.sendText();
