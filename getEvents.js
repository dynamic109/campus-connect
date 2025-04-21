export default function getEvents(app) {
  app.get("/", (req, res) => {
    res.send("Hello World");
  });
}
