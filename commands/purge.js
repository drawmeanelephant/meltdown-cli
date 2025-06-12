

import fs from 'fs';
import path from 'path';

const dataPath = path.resolve('./data/tasks.json');

export default function purge() {
  if (!fs.existsSync(dataPath)) {
    console.log("🧼 Nothing to purge. It's already empty. Like your inbox.");
    return;
  }

  fs.writeFileSync(dataPath, '[]');
  console.log("🧼 All tasks deleted. Just like your career prospects.");
}
