import fs from 'fs';
import path from 'path';

const filePath = path.resolve("events.json");

// Helper to read events
function readEvents() {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

// Helper to write events
function writeEvents(events) {
  fs.writeFileSync(filePath, JSON.stringify(events, null, 2));
}

const events = readEvents();

export function getEvents(res) {
  res.json(events);
}

export function getEventDetails(id, res) {
  const event = events[id];
  if (!event) {
    return res.status(404).json({ error: "Event not found" });
  }
  res.json(event);
}

export function createEvent(req, res) {
  try {
    const { name, description, date, location } = req.body;

    const missingFields = [];
    if (!name) missingFields.push("name");
    if (!description) missingFields.push("description");
    if (!date) missingFields.push("date");
    if (!location) missingFields.push("location");

    if (missingFields.length > 0) {
      return res.status(400).json({
        error: "Missing required field(s).",
        missing: missingFields
      });
    }

    const events = readEvents();
    const newId = String(Object.keys(events).length + 1);

    events[newId] = { name, description, date, location };
    writeEvents(events);

    res.status(201).json({ message: "Event created", event: events[newId] });

  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({
      error: "Something went wrong.",
      message: "Please make sure you're sending name, description, date, and location."
    });
  }
}