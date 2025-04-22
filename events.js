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
  const { name, description, date, location } = req.body;

  if (!name || !description || !date || !location) {
    return res.status(400).json({ error: "All fields are required." });
  }

  
  const newId = String(Object.keys(events).length + 1);

  events[newId] = { name, description, date, location };
  writeEvents(events);

  res.status(201).json({ message: "Event created", event: events[newId] });
}
