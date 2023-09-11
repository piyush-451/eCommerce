const express = require("express");
const _ = require("lodash");
const router = express.Router();
const { User } = require("../models/User");
const { Product } = require("../models/Products");
const { auth } = require("./auth");
require("dotenv").config();

router.post("/orders", [auth], async (req, res) => {
  try {
    const user = await User.findById(req.body.userid);
    res.status(200).send(user.orders);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/wishlist", [auth], async (req, res) => {
  try {
    const user = await User.findById(req.body.userid);
    res.status(200).send(user.wishlist);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/wishlist/add/:id", [auth], async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      const user = await User.findById(req.body.userid);
      const new_item = new Wishlist(
        _.pick(product, ["image", "name", "_id", "category"])
      );
      user.wishlist.push(new_item);
      await user.save();
      res.status(200).send("added");
    } else {
      res.status(400).send("invalid");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = { userRoutes: router };
