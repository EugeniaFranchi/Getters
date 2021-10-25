const express = require("express");
const mongoose = require("mongoose");
const appRouter = require("./routes/appRoutes.js");

const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://root:root123*@cluster0.zf9fl.mongodb.net/chatbotF1?retryWrites=true&w=majority",
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
