import { addTask } from '../utils/storage.js';
import { snarkForAdd } from '../utils/snark.js';

export default function add(task) {
  const dread = Math.floor(Math.random() * 5) + 1;
  addTask(task, dread);
  console.log(snarkForAdd(task, dread));
}
