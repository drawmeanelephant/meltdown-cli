import fs from 'fs';
import path from 'path';

const dataPath = path.resolve('./data/tasks.json');

export default function restore(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`🕳️ Restore failed. The file "${filePath}" is as real as your job security.`);
    return;
  }

  const backupData = fs.readFileSync(filePath);
  fs.writeFileSync(dataPath, backupData);
  console.log("🩹 Tasks restored. Like nothing traumatic ever happened.");
}
