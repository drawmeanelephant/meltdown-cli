import fs from 'fs';
import path from 'path';

const dataPath = path.resolve('./data/tasks.json');

export default function status() {
  if (!fs.existsSync(dataPath)) {
    console.log("🧠 Collapse Index: 0 (no tasks, no hope, no nothing)");
    return;
  }

  const tasks = JSON.parse(fs.readFileSync(dataPath));
  const dreadSum = tasks.reduce((sum, t) => sum + (t.dread || 0), 0);
  const avgDread = tasks.length ? (dreadSum / tasks.length).toFixed(2) : 0;

  console.log(`📊 Meltdown Load: ${tasks.length} tasks`);
  console.log(`☠️ Avg Dread Level: ${avgDread}/5`);
  console.log(`🫣 You are ${(avgDread > 3.5) ? "approaching" : "maintaining"} critical failure.`);
}
