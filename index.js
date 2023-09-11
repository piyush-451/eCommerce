const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { userRoutes } = require("./routes/User");
const { productRoutes } = require("./routes/Product");
const { authenticateRouter } = require("./routes/authenticate");
const cors = require('cors')
const app = express();

//port of server
const PORT = process.env.PORT || 5000;
//connect to db
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected"))
  .catch((e) => console.log(e));

//middleware
app.use(bodyParser.json());
app.use(cors());
app.use("/user", userRoutes);
app.use("/product", productRoutes);
app.use("/authenticate", authenticateRouter);

app.get("/", (req, res) => {
  res.send(`hello! from server on ${PORT}`);
});

app.listen(PORT, () => console.log("Server running"));
