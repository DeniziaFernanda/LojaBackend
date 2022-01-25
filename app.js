const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const app = express();
const port = process.env.PORT || 3000;
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");

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

app.use("/users", usersRouter);

app.use("/products", productsRouter);
