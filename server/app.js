const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

// middleware
app.use(cors());
app.use(bodyParser.json());

// default req
app.get("/", (req, res) => {
	res.send("Welcome to our API");
});

// routes

module.exports = app;
