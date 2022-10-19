const express = require("express");
const Router = express.Router();
const { getStories, addNewStory } = require("../Controllers/Story");

Router.route("/").get(getStories).post(addNewStory);

module.exports = Router;
