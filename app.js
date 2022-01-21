const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const { UserModel } = require("./models/userModel");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Vamos utilizar um middleware : Permite que a app uliize json como forma de comunicação.
app.use(morgan()); // Dependencia de Dev, tras uma informacao do que esta a acontecer no servidor. As requests que estao a chegar

mongoose.connect(
  "mongodb://localhost:27017/BD_Loja?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false",
  () => {
    app.listen(port, () => {
      console.log(`App running at http://localhost:${port}`);
    });
  }
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  UserModel.find()
    .then((value) => {
      res.json({
        message: value,
      });
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
});

app.delete("/users/:id", (req, res) => {
  const id = req.params.id;

  UserModel.deleteOne({ _id: id })
    .then((value) => {
      if (value.deletedCount === 0) {
        res.json({
          message: "User not founded",
        });
      } else {
        res.json({
          message: "User deleted",
        });
      }
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
});
app.post("/users", (req, res) => {
  const user = req.body;

  UserModel.create(user)
    .then((value) => {
      res.json({
        message: "User registered",
      });
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
});
