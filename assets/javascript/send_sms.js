// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = twilKey;
const authToken = ATKEY;
const client = require('twilio')(accountSid, authToken);
let sendText = function (){
  client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+15107267903',
     to: '+15102902391'
   })
  .then(message => console.log(message.sid));
}
Node.sendText();
