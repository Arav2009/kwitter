
 var firebaseConfig = {
    apiKey: "AIzaSyAe7-GfJxZKSQ4bhBL79p536yha43NWZi0",
    authDomain: "kwitter-41fc9.firebaseapp.com",
    databaseURL: "https://kwitter-41fc9-default-rtdb.firebaseio.com",
    projectId: "kwitter-41fc9",
    storageBucket: "kwitter-41fc9.appspot.com",
    messagingSenderId: "327386184751",
    appId: "1:327386184751:web:8956f45f7d004600b1dada"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
    

        
      });});}
getData();

user_name=localStorage.getItem("user_name");
document.getElementById("username").innerHTML="Welcome " + user_name;

function addroom()
    {
      room_name=document.getElementById("add_room").value;

      firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";


    }
    

    function logout()
    {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="mainpage.html";
    }
