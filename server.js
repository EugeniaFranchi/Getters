const express = require("express");
const mongoose = require("mongoose");
const appRouter = require("./routes/appRoutes.js");

const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://euge:1234@cluster0.b2f7j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

app.use(appRouter);

app.listen(3000, () => {
  console.log("Server is running...");
});
