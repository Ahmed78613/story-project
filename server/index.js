const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./db/connect");

const User = require("./Routes/User");
const Story = require("./Routes/Story");
require("dotenv").config();

// Middleware
app.use(cors());
app.use(express.json());

// Default Endpoint
app.get("/", (req, res) => {
	res.json({ message: "API Up & Running..." });
});

// Routes
app.use("/users", User);
app.use("/story", Story);

// Listen & Connect to MongoDB
const PORT = process.env.PORT || 5000;

const start = async () => {
	try {
		connectDB(process.env.MONGO_DB);
		app.listen(PORT, () => console.log(PORT));
	} catch (error) {
		console.log(error);
	}
};

start();
