import fs from 'fs';
import path from 'path';

const filePath = path.resolve("events.json");

function readEvents() {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify({}, null, 2));
  }

  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

function writeEvents(events) {
  fs.writeFileSync(filePath, JSON.stringify(events, null, 2));
}

export { readEvents, writeEvents };
