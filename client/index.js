// Login && Register
// Forms
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const newTaleForm = document.getElementById("tale-form");
// Form buttons
const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");
const logoutBtn = document.getElementById("logout-btn");
const darkModeBtn = document.getElementById("darkmode-btn");
// Containers
const loginContainer = document.getElementById("login-container");
const registerContainer = document.getElementById("register-container");
const taleContainer = document.querySelector(".tale-container");
const allTalesContainer = document.getElementById("all-tales-container");
// Headings
const headings = document.querySelectorAll(".heading");

// Event Listeners
// forms
loginForm.addEventListener("submit", handleLogin);
registerForm.addEventListener("submit", handleRegister);
newTaleForm.addEventListener("submit", addNewTale);
// buttons
loginBtn.addEventListener("click", switchForms);
registerBtn.addEventListener("click", switchToRegister);
logoutBtn.addEventListener("click", logout);
darkModeBtn.addEventListener("click", darkMode);

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
	// ! IF Already logged in
	const session = localStorage.getItem("session");
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
		const data = await res.json();
		// ! Save to local Storage
		localStorage.setItem("session", data.accessToken);
		/// Check Response Status
		if (res.status === 400) {
			return alert("Sorry but this Username does not exist.");
		} else if (res.status === 401) {
			return alert("Incorrect password, please try again.");
		} else {
			userLoggedIn(username, data.accessToken);
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

async function userLoggedIn(username, accessData) {
	// Save to local Storage
	localStorage.setItem("username", username);
	// Remove Containers
	loginContainer.style.display = "none";
	// Show Stories Container
	taleContainer.style.transition = "1s ease-in-out";
	taleContainer.style.display = "flex";
	allTalesContainer.style.display = "flex";
	// Show Log out Button
	logoutBtn.style.display = "block";
	// Fetch Their Stories
	try {
		const res = await fetch("http://localhost:5000/story", {
			method: "GET",
			headers: {
				Authorization: `Bearer ${accessData}`,
			},
		});
		const storyData = await res.json();
		applyStoriesToDom(storyData.result);
	} catch (error) {
		console.log(error);
	}
}

function applyStoriesToDom(storyData) {
	storyData.forEach((story) => {
		// Div
		const taleDiv = document.createElement("div");
		taleDiv.id = "tales-content";
		// Title
		const taleTitle = document.createElement("h3");
		taleTitle.textContent = story.title;
		// Name
		const taleName = document.createElement("p");
		taleName.textContent = story.pseudonym;
		// Body
		const taleBody = document.createElement("p");
		taleBody.textContent = story.body;
		// Append to div
		taleDiv.appendChild(taleTitle);
		taleDiv.appendChild(taleName);
		taleDiv.appendChild(taleBody);
		// Append to DOM
		allTalesContainer.appendChild(taleDiv);
	});
}

async function addNewTale(e) {
	e.preventDefault();
	// Store Data
	const title = e.target.taleTitle.value;
	const pseudonym = e.target.anonyMouse.value;
	const body = e.target.tailTale.value;
	// Put data into a object
	const sendData = {
		username: localStorage.getItem("username"),
		title,
		pseudonym,
		body,
	};
	// Send POST request
	try {
		fetch("http://localhost:5000/story", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${localStorage.getItem("session")}`,
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(sendData),
		});
		location.reload();
	} catch (error) {
		console.log(error);
	}
}

function darkMode() {
	const darkModeIcon = document.getElementById("darkModeIcon");
	if (darkModeIcon.className === "fa-solid fa-moon") {
		// Set To Dark Mode
		darkModeIcon.className = "fa-solid fa-sun";
		document.body.style.backgroundImage =
			"linear-gradient(to top, #3a9c96 0%, #1d0761 100%)";
		// forms
		loginForm.classList.add("dark");
		registerForm.classList.add("dark");
		newTaleForm.classList.add("dark");

		// buttons
		loginBtn.classList.add("dark");
		registerBtn.classList.add("dark");
		logoutBtn.classList.add("dark");
		darkModeBtn.classList.add("dark");
		// containers
		allTalesContainer.classList.add("dark");
		// headings
		headings.forEach((e) => (e.style.color = "white"));
	} else {
		// Set To Light Mode
		darkModeIcon.className = "fa-solid fa-moon";
		document.body.style.backgroundImage =
			"linear-gradient(to top, #88d3ce 0%, #6e45e2 100%)";
		// forms
		loginForm.classList.remove("dark");
		registerForm.classList.remove("dark");
		newTaleForm.classList.remove("dark");

		// buttons
		loginBtn.classList.remove("dark");
		registerBtn.classList.remove("dark");
		logoutBtn.classList.remove("dark");
		darkModeBtn.classList.remove("dark");
		// containers
		allTalesContainer.classList.remove("dark");
		// headings
		headings.forEach((e) => (e.style.color = "black"));
	}
}

function userAlreadyLoggedIn() {
	const loggedIn = localStorage.getItem("username");
	const session = localStorage.getItem("session");

	if (loggedIn) {
		userLoggedIn(loggedIn, session);
	}
}

function logout() {
	localStorage.clear();
	location.reload();
}

userAlreadyLoggedIn();

// Tale Publish && Post
// Forms
// const taleForm = document.getElementById("tale-form");
// Form buttons
// const publishBtn = document.getElementById("publish-btn");
// Containers
// const taleContainer = document.getElementById("tale-container");
// Listeners
// loginForm.addEventListener("submit", handlePublish);

// title: { type: String, required: true },
// pseudonym: { type: String, required: true },
// body: { type: String, required: true },

// Mongo
// From https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
// require("dotenv").config();

// const express = require("express");
// const mongoose = require("mongoose");
// const mongoString = process.env.MONGO_DB;

// mongoose.connect(mongoString);
// const database = mongoose.connection;

// database.on("error", (error) => {
// 	console.log(error);
// });

// database.once("connected", () => {
// 	console.log("Database Connected");
// });
// const app = express();

// app.use(express.json());

// app.listen(3000, () => {
// 	console.log(`Server Started at ${3000}`);
// });
