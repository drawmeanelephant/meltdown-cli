import { addTask } from '../utils/storage.js';
import { snarkForAdd } from '../utils/snark.js';

export default function add(task) {
  const dread = Math.floor(Math.random() * 5) + 1;
  addTask(task, dread);
  const fallback = `Task recorded: "${task}" — dread level ${dread}/5. It's fine. You're fine.`;
  console.log((snarkForAdd && typeof snarkForAdd === 'function')
    ? snarkForAdd(task, dread)
    : fallback);
}
