//YOUR FIREBASE LINKS
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

    room_name = localStorage.getItem("room_name");

function send() {
      user_name = localStorage.getItem("Username");
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}

function logout() {
      localStorage.removeItem("Username");
      localStorage.removeItem("room_name");
      localStorage.removeItem("Password");
      window.location.replace("Kwitter.html");
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         //Start code
         name = message_data['name'];
         message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
         like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
         row = name_with_tag+message_with_tag+like_button+span_with_tag;
         document.getElementById("output").innerHTML += row;
         //end code
      } });  }); }
getData();

function updateLike(message_id)
{
  console.log("clicked on like button - " + message_id);
	button_id = message_id;
	likes = document.getElementById(button_id).value;
	updated_likes = Number(likes) + 1;
	console.log(updated_likes);

	firebase.database().ref(room_name).child(message_id).update({
		like : updated_likes  
	 });

}
