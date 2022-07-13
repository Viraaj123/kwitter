var firebaseConfig = {
 apiKey: "AIzaSyAjxPwDhDx1EPj8I2bgJPIeA8JjKsUaD2o",
 authDomain: "appointment-6f6f0.firebaseapp.com",
 databaseURL: "https://appointment-6f6f0-default-rtdb.firebaseio.com",
 projectId: "appointment-6f6f0",
 storageBucket: "appointment-6f6f0.appspot.com",
 messagingSenderId: "747016456089",
 appId: "1:747016456089:web:507b1b52ef63f246247508",
 measurementId: "G-RMPYRKF7WZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
