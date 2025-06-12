import fs from 'fs';
import path from 'path';

const dataPath = path.resolve('./data/tasks.json');

export default function complete(id) {
  if (!fs.existsSync(dataPath)) {
    console.log("🤷‍♂️ No tasks found. You can't finish what you never started.");
    return;
  }

  const tasks = JSON.parse(fs.readFileSync(dataPath));
  const index = parseInt(id) - 1;

  if (isNaN(index) || index < 0 || index >= tasks.length) {
    console.log("🧮 Invalid task ID. Maybe count slower.");
    return;
  }

  const [done] = tasks.splice(index, 1);
  fs.writeFileSync(dataPath, JSON.stringify(tasks, null, 2));
  console.log(`✅ "${done.name}" marked as complete. Did that actually help? Didn't think so.`);
}
