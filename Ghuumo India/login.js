 function switchToSignUp() {
  document.getElementById("signUpBox").style.display = "block";
  document.getElementById("logInBox").style.display = "none";
  document.getElementById("message").textContent = "";
}

function switchToLogin() {
  document.getElementById("logInBox").style.display = "block";
  document.getElementById("signUpBox").style.display = "none";
  document.getElementById("message").textContent = "";
}

function register() {
    let userrName = document.getElementById("newName").value.trim();
  let userName = document.getElementById("newUser").value.trim().toLowerCase();
  userName = userName + Math.floor(Math.random() * 100); // Append a random number to ensure uniqueness    
  let userPass = document.getElementById("newPassword").value.trim();

  if (userrName === "" || userName === "" || userPass === "") {
    alert("Please Enter the Details");
    return;
  }
//   alert(userName + "is already taken, please try another username.");
  alert("You can use this username!\n"+"Username: " + userName + "\nPassword: " + "*********");
  localStorage.setItem("name", userrName);
  localStorage.setItem("user", userName);
  localStorage.setItem("pass", userPass); 

  alert("SignUp Successful");
    document.getElementById("message").textContent = "SignUp Successful! You can now log in.";
  document.getElementById("message").style.color = "green";
  document.getElementById("newName").value = ""; 
  document.getElementById("newUser").value = "";
  document.getElementById("newPassword").value = "";

  switchToSignUp();
}

function login() {
  const username = document.getElementById("userName").value.trim();
  const password = document.getElementById("passWord").value.trim();

  const storedUser = localStorage.getItem("user"); 
  const storedPass = localStorage.getItem("pass");

  const message = document.getElementById("message"); 

  if (username === storedUser && password === storedPass) {
    message.style.color = "green";
    message.textContent = "Login successful!";
    window.location.href = "index.html"; // Redirect to the main page after successful login

  } else {
    message.style.color = "red";
    message.textContent = "Invalid username or password.";
    window.location.href="login.html";
  }

  document.getElementById("userName").value = "";
  document.getElementById("passWord").value = ""; 

}