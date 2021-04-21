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
      
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;



      } });  }); }
getData();



function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="mainpage.html";
}

function redirectToRoomNmame(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function send()
{
   msg= document.getElementById("msg").value
   firebase.database().ref(room_name).push({
   name: user_name,
   message:msg,
   like:0
   });
   
   document.getElementById("msg").value="";

}