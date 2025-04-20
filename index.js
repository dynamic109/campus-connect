import express from "express";

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
  console.log("Server running");
});
