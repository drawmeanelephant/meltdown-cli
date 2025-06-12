import fs from 'fs';
import path from 'path';

const dataPath = path.resolve('./data/tasks.json');
const backupPath = path.resolve(`./data/backup-${Date.now()}.json`);

export default function backup() {
  if (!fs.existsSync(dataPath)) {
    console.log("📭 Nothing to back up. Emptiness is hard to version.");
    return;
  }

  const tasks = JSON.parse(fs.readFileSync(dataPath));

  if (!Array.isArray(tasks) || tasks.length === 0) {
    console.log("🫥 Backup skipped. Nothing in memory worth preserving.");
    return;
  }

  fs.writeFileSync(backupPath, JSON.stringify(tasks, null, 2));
  console.log(`📦 Backup complete. File saved to ${backupPath}`);
}
