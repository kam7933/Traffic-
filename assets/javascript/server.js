// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure

let twilKey = "AC01f823004c983f60066a619660a53054";
let ATKEY = "6613e8a476ac04e5c62b22ba2bc0db6e";
let PORT = 3000;

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
      from: '+15107267903',
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
