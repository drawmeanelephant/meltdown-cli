

import fs from 'fs';
import path from 'path';

const dataPath = path.resolve('./data/tasks.json');

export default function edit(id, options) {
  if (!fs.existsSync(dataPath)) {
    console.log("📭 No tasks to edit. Not even a hallucination of productivity.");
    return;
  }

  const tasks = JSON.parse(fs.readFileSync(dataPath));
  const taskIndex = tasks.findIndex(t => t.id === parseInt(id));

  if (taskIndex === -1) {
    console.log(`🕳️ Task #${id} doesn't exist. Much like your original goals.`);
    return;
  }

  const task = tasks[taskIndex];
  if (options.title) {
    task.title = options.title;
    console.log(`✍️ Title updated. It's still doomed, but prettier.`);
  }
  if (options.dread) {
    task.dread = parseInt(options.dread);
    console.log(`📈 Dread recalibrated to ${task.dread}/5. Diagnosis: terminal.`);
  }

  tasks[taskIndex] = task;
  fs.writeFileSync(dataPath, JSON.stringify(tasks, null, 2));
}