import express from "express";
import getEvents from "./getEvents.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/api/connect", (req, res) => {
  const name = req.body.name;
  const message = req.body.message;
  res.json({message: "Hello ${name},your message has been forwarded to the campus connect team."});
});

app.listen(3000, () => {
  console.log("Sever running");
});

getEvents();
