const express = require("express");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const router = express.Router();
const { User } = require("../models/User");

require("dotenv").config();

router.post("/signin", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (user) {
    const token = jwt.sign(
      _.pick(user, ["_id", "isAdmin", "name", "email"]),
      process.env.JWT_PRIVATE_KEY
    );
    res.status(200).send(token);
  } else res.status(400).send("Invalid credentials");
});

router.post("/signup", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      res.status(400).send("user already exists");
    } else {
      const new_user = new User(req.body);
      try {
        await new_user.save();
      res.status(200).send('registered');
      } catch (error) {
        res.status(error.status).send(error);
      }
    }
  } catch (error) {
    res.status(error.status).send(error);
  }
});

module.exports = { authenticateRouter: router };
