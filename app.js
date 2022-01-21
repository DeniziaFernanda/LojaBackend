const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const { createUserController, deleteUserController, getUserByIdController, updateUserController, getUsersController } = require("./controllers/usersController");
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

app.get("/users", getUsersController);
app.delete("/users/:id", deleteUserController);
app.post("/users", createUserController);
app.put("/users/:id", updateUserController);
app.get("/users/:id", getUserByIdController);