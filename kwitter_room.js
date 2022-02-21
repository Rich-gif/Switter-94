
var firebaseConfig = {
      apiKey: "AIzaSyDEYWnTeB4u-y74ctkm5cAgcfO8K8RgKFA",
      authDomain: "social-website-bffd6.firebaseapp.com",
      databaseURL: "https://social-website-bffd6-default-rtdb.firebaseio.com",
      projectId: "social-website-bffd6",
      storageBucket: "social-website-bffd6.appspot.com",
      messagingSenderId: "623826508745",
      appId: "1:623826508745:web:d4fdc753f850caf1596618"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
