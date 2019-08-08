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