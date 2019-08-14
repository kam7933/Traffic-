// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure

let twilKey = "Your Twilio Key";
let ATKEY = "Your othe twilio key";
let PORT = "your port";

const express = require('express');
const accountSid = twilKey;
const authToken = ATKEY;

var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/api/:phonenumber/:msg', function (req, res) {
  res.send(req.params.phonenumber);
  let phonenumber = req.params.phonenumber
  let msg = req.params.msg
  const client = require('twilio')(accountSid, authToken);
  // console.log("Hello World!")
   client.messages
   .create({
      body: msg,
      from: 'your twilio number',
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
