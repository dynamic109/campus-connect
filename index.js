import express from "express";
import { getEvents, getEventDetails, createEvent } from './events.js'; 


const app = express();
app.use(express.json());  

app.get("/", (req, res) => {
  res.send("Welcome to campus connect!");
  console.log("home")
});

app.get("/api/events", (req, res) => {
  getEvents(res)
})

app.get("/api/events/:id", (req, res) => {
  getEventDetails(req.params.id, res)
})

app.post("/api/events", (req, res) => {
  createEvent(req, res)
})




app.listen(3000, () => {
  console.log("Server running");
});


