const userModel = require("../Schema/User");
const bcrypt = require("bcryptjs");

const getUsers = async (req, res) => {
	try {
		const users = await userModel.find({});
		res.status(200).json({ result: users });
	} catch (error) {
		res.status(404).json({ msg: error.message });
	}
};

const addNewUser = async (req, res) => {
	try {
		// Hash Password
		const salt = await bcrypt.genSalt();
		const hashedPassword = await bcrypt.hash(req.body.password, salt);
		// Create new User
		const newUser = await userModel.create({
			username: req.body.username,
			password: hashedPassword,
		});
		res.status(201).json({ result: newUser });
	} catch (error) {
		res.status(404).json({ msg: error.message });
	}
};

const userLogin = async (req, res) => {
	// Look for user
	const user = await userModel.find({ username: req.body.username });
	if (!user.length) {
		return res.status(400).send("Cannot find user");
	}
	try {
		// Check Password
		console.log(await bcrypt.compare(req.body.password, user[0].password));
		if (await bcrypt.compare(req.body.password, user[0].password)) {
			res.send("Success! Your now logged in.");
		} else {
			res.send("Not Allowed! Password does not match.");
		}
	} catch (error) {
		res.status(404).json({ msg: error.message });
	}
};

module.exports = { getUsers, addNewUser, userLogin };
