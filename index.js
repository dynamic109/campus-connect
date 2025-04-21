import express from "express";
import getEvents from "./getEvents.js";
import postEvent  from "./postEvent.js";  

const app = express();
app.use(express.json());  

//METHODS here
getEvents(app);
postEvent(app);


app.listen(3000, () => {
  console.log("Server running");
});


