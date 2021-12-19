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