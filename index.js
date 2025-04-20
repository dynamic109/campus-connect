import express from "express";
import getEvents from "./getEvents.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Sever running");
});

getEvents();
