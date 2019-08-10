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
  console.log(database);

  // function myFunction(){
  //   document. getElementById("myDropdown").classList.("show");

  // }

  window.onclick = function(event) {
    // myFunction();
    console.log('click')
    if (!event.target.matches('dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let index;
      for (index = 0; index < dropdowns.length;index++){
        let openDropdown= dropdowns[index];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
        else{
          openDropdown.classList.toggle('show');
        }
      }
    }
  }
  let signUp = document.getElementById("sign-up");
  let login = document.getElementById("login");
  let hideable = document.getElementsByClassName("hideable");

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
    $(".form").append(`<p type="submit"  class="submit-btn" id="new-train">Submit</p>`);
    

    
  });
  login.addEventListener("click", function(){
    $(".hideable").hide();
    // each one needs to build a page and have all of the needed function to operate the pa
    

  });

