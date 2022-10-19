// Forms
const loginForm = document.getElementById(".login-form");
const registerForm = document.getElementById(".register-form");
// Form buttons
const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");
// Containers
const loginContainer = document.getElementById("login-container");
const registerContainer = document.getElementById("register-container");

// Register & Login Buttons
loginBtn.addEventListener("click", switchForms);
registerBtn.addEventListener("click", switchToRegister);

function switchToRegister() {
	loginContainer.style.display = "none";
	registerContainer.style.display = "flex";
}

function switchForms() {
	loginContainer.style.display = "flex";
	registerContainer.style.display = "none";
}

// Login Form submit
loginForm.addEventListener("submit", handleLogin);

function handleLogin(e) {
	e.preventDefault();
	console.log(e.target.username.value, e.target.password.value);
}

// Login Form submit
registerForm.addEventListener("submit", handleRegister);

function handleRegister(e) {
	e.preventDefault();
	console.log(e.target.username.value, e.target.password.value);
}
