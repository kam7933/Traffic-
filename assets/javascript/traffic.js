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






  function myFunction(){
    document. getElementById("myDropdown").classList.toggle("show");

  }

  window.onclick = function(event) {
    if (!event.target.matches('dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let index;
      for (index = 0; index < dropdowns.length;index++){
        let openDropdown= dropdowns[index];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }