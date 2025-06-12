import fs from 'fs-extra';

const FILE = './data/tasks.json';

export default async function complete(id) {
  const data = await fs.readJson(FILE).catch(() => ({ tasks: [] }));
  const task = data.tasks.find(t => t.id === Number(id));

  if (!task) {
    console.log(`Task #${id} not found.`);
    return;
  }

  task.status = 'done';
  task.dread = Math.max(0, task.dread - 2);
  await fs.writeJson(FILE, data, { spaces: 2 });

  console.log(`Completed "${task.title}". Dread now ${task.dread}.`);
}
