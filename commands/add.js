import { addTask } from '../utils/storage.js';
import { snarkForAdd } from '../utils/crisisLoader.js';

export default async function add(task) {
  const dread = Math.floor(Math.random() * 5) + 1;
  await addTask(task, dread);
  console.log(await snarkForAdd(task, dread));
}
