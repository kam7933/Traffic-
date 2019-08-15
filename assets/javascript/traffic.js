var firebaseConfig = {
    apiKey: fbKey,
    authDomain: "gridunlocked-75803.firebaseapp.com",
    databaseURL: "https://gridunlocked-75803.firebaseio.com",
    projectId: "gridunlocked-75803",
    storageBucket: "gridunlocked-75803.appspot.com",
    messagingSenderId: "99199403164",
    appId: "1:99199403164:web:a476c1e2b13cc84f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let database = firebase.database();
  // console.log(database);

  let constrc = true;
  let incidents = true;
  let otherEvents = true;
  let conjest = true;
 
 
  // function myFunction(){
  //   document. getElementById("myDropdown").classList.("show");

  // }
  let dropDown = document.getElementById("drop-btn");

  dropDown.addEventListener("click", function(event) {
    // myFunction();
    console.log('click')
    // if (!event.target.matches('dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let index;
      console.log(`drop down number: ${dropDown}`)
      for (index = 0; index < dropdowns.length;index++){
        let openDropdown= dropdowns[index];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
        else{
          openDropdown.classList.toggle('show');
        }
      }
    // }
  });
  let signUp = document.getElementById("sign-up");
  let login = document.getElementById("login");
  let hideable = document.getElementsByClassName("hideable");

  let sendAText = function(phone, result){

    fetch(`http://localhost:3000/api/+1${phone}/${result}`, { mode: 'no-cors' }).then(function(res){

      console.log("Testing....");
    })
  }
  // `http://localhost:3000/api/+1${phone}/con/construction%2/

  $(document).ready(function(){
   
    

  
    $("#submit").on("click", function(event){
      event.preventDefault()
      let queryUrl = `https://www.mapquestapi.com/traffic/v2/incidents?&outFormat=json&boundingBox=37.88487982416931%2C-122.20650672912599%2C37.83412393242584%2C-122.32186317443848&filters=construction%2Cincidents%2Cevent%2Ccongestion&key=${mqKey}`

      fetch(queryUrl).then(function(response){
        console.log(`response: ${response}`)
        return response.json();
      }).then(function(res){
        let resLength = res.incidents.length;
        console.log(resLength)
        console.log(`res: ${JSON.stringify(res)}`);
        console.log(res.incidents[0].shortDesc)
        result = res.incidents[0].shortDesc;
        console.log(result)
      
        
      let phone = $("#phone").val();
      console.log(phone)
      sendAText(phone, result)
      })
      
    }) 
  })

  // sendAText();


  // extranious info 
  signUp.addEventListener("click", function(){
    event.preventDefault();
    $(".hideable").hide();
    // each one needs to build a page and have all of the needed function to operate the page.

    $("#popout").append(`<section class="form-big-box"></section>`);
    $(".form-big-box").append(`<section class="form-inner-box"></section>`);
    $(".form-inner-box").append(`<form class="form"></form>`);
    // make name section
    $(".form").append(`<section class="name-box"></section>`);
    $(".name-box").append(`<label for="name-input" class="label-text">Name:</label>`)
    $(".name-box").append(`<input type="text" class="form-controller" id="name-input">`)
    // email section
    $(".form").append(`<section class="email-box"></section>`);
    $(".email-box").append(`<label for="email-input" class="label-text">Email:</label>`)
    $(".email-box").append(`<input type="email" class="form-controller" id="email-input">`)
    // phone number
    $(".form").append(`<section class="phone-box"></section>`);
    $(".phone-box").append(`<label for="phone" class="label-text">Phone Number:</label>`)
    $(".phone-box").append(`<input type="tel" id="phone" name="phone"pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"required>`)
    // password
    $(".form").append(`<section class="pw-box"></section>`);
    $(".pw-box").append(`<label for="pw-input" class="label-text">Password:</label>`)
    $(".pw-box").append(`<input type="password" class="form-controller" id="pw-input">`)
    $(".form").append(`<section class="pw-check-box"></section>`);
    $(".pw-check-box").append(`<label for="pw-check-input" class="label-text">Confirm Password:</label>`)
    $(".pw-check-box").append(`<input type="password" class="form-controller" id="pw-check-input">`)
    $(".form").append(`<p type="submit"  id="submit-su-btn">Submit</p>`);
    
  });
  
  login.addEventListener("click", function(){
    $(".hideable").hide();
    // each one needs to build a page and have all of the needed function to operate the pa
    $("#popout").append(`<section class="form-big-box"></section>`);
    $(".form-big-box").append(`<section class="form-inner-box"></section>`);
    $(".form-inner-box").append(`<form class="form"></form>`);
    // make name section
    $(".form").append(`<section class="name-box"></section>`);
    $(".name-box").append(`<label for="name-input" class="label-text">Name:</label>`)
    $(".name-box").append(`<input type="text" class="form-controller" id="name-input">`)
    // password
    $(".form").append(`<section class="pw-box"></section>`);
    $(".pw-box").append(`<label for="pw-input" class="label-text">Password:</label>`)
    $(".pw-box").append(`<input type="password" class="form-controller" id="pw-input">`)
    $(".form").append(`<p type="submit"  id="submit-li-btn" >Submit</p>`);
  });





