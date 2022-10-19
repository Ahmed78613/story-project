const storyModel = require("../Schema/Story");

const getStories = async (req, res) => {
	try {
		const stories = await storyModel.find({});
		res.status(200).json({ result: stories });
	} catch (error) {
		res.status(404).json({ msg: error.message });
	}
};

const addNewStory = async (req, res) => {
	try {
		const newStory = await storyModel.create(req.body);
		res.status(201).json({ result: newStory });
	} catch (error) {
		res.status(404).json({ msg: error.message });
	}
};

module.exports = { getStories, addNewStory };
