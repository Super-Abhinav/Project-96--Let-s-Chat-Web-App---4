//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCnXS8Fn8Y7WaMXSbAacvF8R-38kwFqq2M",
      authDomain: "kwitter-webapp---project.firebaseapp.com",
      databaseURL: "https://kwitter-webapp---project-default-rtdb.firebaseio.com",
      projectId: "kwitter-webapp---project",
      storageBucket: "kwitter-webapp---project.appspot.com",
      messagingSenderId: "624110386371",
      appId: "1:624110386371:web:c1c560a12882f41e0e7676"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function Logout() {
      window.location = "Kwitter.html";
}

user_name = localStorage.getItem("Username");
document.getElementById("user_name").innerHTML = "Hi, " + user_name;