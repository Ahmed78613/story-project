const userModel = require("../Schema/User");

const getUsers = async (req, res) => {
	try {
		const users = await userModel.find({});
		res.status(200).json({ result: users });
	} catch (error) {
		res.status(404).json({ msg: error.message });
	}
};

const addNewUser = async (req, res) => {
	console.log(req.body);
	try {
		const newUser = await userModel.create(req.body);
		res.status(200).json({ result: newUser });
	} catch (error) {
		res.status(404).json({ msg: error.message });
	}
};

module.exports = { getUsers, addNewUser };
