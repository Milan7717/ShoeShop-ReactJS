import express, { request, response } from "express";
import { PORT, mongodbURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Hello world");
});

app.listen(PORT, () => {
  console.log(`App is listening ${PORT}`);
});

//mongoose connect
mongoose
  .connect(mongodbURL)
  .then(() => {
    console.log("App connected to database");
  })
  .catch((error) => {
    console.log(error);
  });
