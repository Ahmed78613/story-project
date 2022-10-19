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
const taleContainer = document.querySelector(".tale-container");
const allTalesContainer = document.getElementById("all-tales-container");
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
async function handleLogin(e) {
	e.preventDefault();
	// Get Login details & remove whitespace
	const username = e.target.username.value.trim();
	const password = e.target.password.value.trim();
	// Send Login POST Request
	try {
		const res = await fetch("http://localhost:5000/users/login", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, password }),
		});
		/// Check Response Status
		if (res.status === 400) {
			return alert("Sorry but this Username does not exist.");
		} else if (res.status === 401) {
			return alert("Incorrect password, please try again.");
		} else {
			userLoggedIn();
		}
	} catch (error) {
		console.log(error);
	}
}

// Register Form Submit
async function handleRegister(e) {
	e.preventDefault();
	const username = e.target.registerUsername.value.trim();
	const password = e.target.registerPassword.value.trim();
	const confirmPassword = e.target.confirmPassword.value.trim();
	// Check Username & Password
	if (!username || username.length < 5) {
		return alert("Username must be at least 5 characters.");
	} else if (password !== confirmPassword) {
		return alert("Passwords don't match. Please try again.");
	} else if (password.length < 8) {
		return alert("Passwords must be at least 8 characters.");
	}
	try {
		const res = await fetch("http://localhost:5000/users", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, password }),
		});
		if (res.status === 404) {
			return alert("Username already taken.");
		} else if (res.status === 201) {
			alert("Successfully registered, please login.");
			registerContainer.style.display = "none";
			loginContainer.style.display = "flex";
		}
	} catch (error) {
		console.log(error);
	}
}

function userLoggedIn() {
	// Remove Containers with Transition
	loginContainer.style.transition = "1s ease-in-out";
	loginContainer.style.opacity = 0;
	setTimeout(() => {
		loginContainer.style.display = "none";
		// Show Stories Container
		taleContainer.style.transition = "1s ease-in-out";
		taleContainer.style.display = "flex";
		allTalesContainer.style.display = "flex";
	}, 1000);
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
