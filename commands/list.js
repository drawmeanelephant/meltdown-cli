

import fs from 'fs';
import path from 'path';

const dataPath = path.resolve('./data/tasks.json');

export default function list() {
  if (!fs.existsSync(dataPath)) {
    console.log("🔍 No data found. Either you're highly functional or it's broken again.");
    return;
  }

  const tasks = JSON.parse(fs.readFileSync(dataPath));
  if (!tasks.length) {
    console.log("🫥 No tasks in meltdown. Congrats? Or denial?");
    return;
  }

  console.log("🧾 Current meltdown task list:");
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task.name} (Dread: ${task.dread}/5)`);
  });
}