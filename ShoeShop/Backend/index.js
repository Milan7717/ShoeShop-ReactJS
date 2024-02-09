import express, { request, response } from "express";
import { PORT, mongodbURL } from "./config.js";
import mongoose from "mongoose";
import categoryRoute from "./routes/categoryRoute.js"

const app = express();

//middleware for parsing request body
app.use(express.json());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to the ShoeShop home page");
});

app.listen(PORT, () => {
  console.log(`App is listening ${PORT}`);
});

//middleware for categoryRoute model
app.use("/category", categoryRoute)

//mongoose connect
mongoose
  .connect(mongodbURL)
  .then(() => {
    console.log("App connected to database");
  })
  .catch((error) => {
    console.log(error);
  });
