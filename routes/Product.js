const express = require("express");
const { auth } = require("./auth");
const router = express.Router();
const { products } = require("../models/Products");
const { User, Order } = require("../models/User");

router.get("/:id", async (req, res) => {
  try {
    const product = await products.findById(req.params.id);
    res.status(200).send(product);
  } catch (error) {
    res.status(404).send("not found");
  }
});

router.post("/", [auth], async (req, res) => {
  if (req.body.isAdmin) {
    const product = await products.find({
      name: req.body.name,
      category: req.body.category,
    });
    if (product) {
      res.status(400).send({ message: "This product already exists" });
    }

    try {
      const new_product = new Product(req.body);
      await new_product.save();
      res.status(200).send("product created");
    } catch (error) {
      res.status(500).send({ message: "request failed " });
    }
  } else res.status(403).send("forbidden");
});

router.put("/:id", [auth], async (req, res) => {
  if (req.body.isAdmin) {
    try {
      let product = await products.findById(req.body.productid);
      const keys = Object.keys(req.body.modified);
      const values = Object.values(req.body.modified);
      for (let i = 0; i < keys.length; i++) {
        product[keys[i]] = values[i];
      }
      await product.save();
      res.status(200).send(product);
    } catch (error) {
      res.status(400).send(error);
    }
  } else {
    res.status(403).send("forbidden");
  }
});

router.delete("/:id", auth, async (req, res) => {
  if (req.body.isAdmin) {
    try {
      const product = await products.findByIdAndRemove(req.body.id);
      res.status(200).send("deleted");
    } catch (error) {
      res.status(error.status).send(error);
    }
  }
});

router.post("/all", [auth] ,async (req, res) => {
  if(req.body.isAdmin){
    try {
      const product = await products.find();
      res.status(200).send(product);
    } catch (error) {
      res.status(error.status).send(error);
    }
  }else{
    res.status(403).send('forbidden')
  }
});

router.get("/all/:category", async (req, res) => {
  try {
    const product = await products.find({category:req.params.category});
    res.status(200).send(product);
  } catch (error) {
    res.status(error.status).send(error);
  }
});

router.post("/buy/:id", [auth], async (req, res) => {
  try {
    let product = await products.findById(req.body.productid);
    if (product.quantity <= 0) res.status(400).send("product not available");
    let user = await User.findById(req.body.userid);
    const order = new Order({
      quantity: req.body.quantity,
      cost: req.body.cost,
      name: product.name,
      image: product.image,
    });
    product.quantity = product.quantity - 1;
    await product.save();
    user.orders.push(order);
    await user.save();
    res.status(200).send("ordered");
  } catch (error) {
    res.status(error.status).send(error);
  }
});

module.exports = { productRoutes: router };
