export default function postEvent(app) {
  app.post("/api/connect", (req, res) => {
    try {
      const eventData = req.body;
      console.log("Received event data:", eventData);
      res.status(200).send("Event data received successfully.");
    } catch (error) {
      console.error("Error processing event data:", error);
      res.status(500).send("An error occurred while processing event data.");
    }
  });
  
} 