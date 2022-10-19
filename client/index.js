// Login && Register
// Forms
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
// Form buttons
const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");
// Containers
const loginContainer = document.getElementById("login-container");
const registerContainer = document.getElementById("register-container");
// Event Listeners
loginBtn.addEventListener("click", switchForms);
registerBtn.addEventListener("click", switchToRegister);
loginForm.addEventListener("submit", handleLogin);
registerForm.addEventListener("submit", handleRegister);

// Switch Forms
function switchToRegister() {
	loginContainer.style.display = "none";
	registerContainer.style.display = "flex";
}

function switchForms() {
	loginContainer.style.display = "flex";
	registerContainer.style.display = "none";
}

// Login Form submit
function handleLogin(e) {
	e.preventDefault();
	const username = e.target.username.value;
	const password = e.target.password.value;
}

// Register Form submit
function handleRegister(e) {
	e.preventDefault();
	const username = e.target.registerUsername.value;
	const password = e.target.registerPassword.value;
	const confirmPassword = e.target.confirmPassword.value;
	// Check if password math
	password === confirmPassword
		? console.log("yes")
		: alert("Passwords don't match. Please try again.");
}

// Tale Publish && Post
// Forms
const taleForm = document.getElementById("tale-form");
// Form buttons
const publishBtn = document.getElementById("publish-btn");
// Containers
const taleContainer = document.getElementById("tale-container");
// Listeners
loginForm.addEventListener("submit", handlePublish);


// title: { type: String, required: true },
// pseudonym: { type: String, required: true },
// body: { type: String, required: true },

// Mongo
// From https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.MONGO_DB;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
