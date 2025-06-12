import chalk from 'chalk';
import { getTasks } from '../utils/storage.js';

export default async function list() {
  const tasks = await getTasks();
  if (!tasks.length) {
    console.log('No tasks. Either you\'re amazing or totally in denial.');
    return;
  }

  tasks.sort((a, b) => b.dread - a.dread);
  console.log('Behold your looming disasters:');
  for (const t of tasks) {
    const statusColor = t.status === 'completed' ? chalk.green : chalk.yellow;
    const statusText = statusColor(t.status);
    console.log(`${t.id}. [${statusText}] (dread ${t.dread}) - ${t.title}`);
  }
  console.log('Try not to panic.');
}
