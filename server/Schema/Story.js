const mongoose = require("mongoose");

const storySchema = mongoose.Schema({
	title: { type: String, required: true },
	pseudonym: { type: String, required: true },
	body: { type: String, required: true },
});

const storyModel = mongoose.model("story", storySchema);
module.exports = storyModel;
