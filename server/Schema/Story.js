const mongoose = require("mongoose");

const storySchema = mongoose.Schema({
	title: { type: String || Number, required: true },
	pseudonym: { type: String || Number, required: true },
	body: { type: String || Number, required: true },
});

const storyModel = mongoose.model("story", storySchema);
module.exports = storyModel;
