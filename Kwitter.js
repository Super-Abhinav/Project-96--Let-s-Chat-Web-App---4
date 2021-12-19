function addUser() {
    user_name = document.getElementById("Username").value;
    password = document.getElementById("password").value;
    localStorage.setItem("Username",user_name);
    localStorage.setItem("Password",password);
    window.location = "Kwitter_room.html";
}