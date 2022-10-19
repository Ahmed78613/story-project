const express = require("express");
const Router = express.Router();
const { getUsers, addNewUser } = require("../Controllers/User");

Router.route("/").get(getUsers).post(addNewUser);

module.exports = Router;
