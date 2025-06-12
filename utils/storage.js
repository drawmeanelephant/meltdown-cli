import fs from 'fs-extra';

const FILE = './data/tasks.json';

export async function addTask(title, dread) {
  const data = await fs.readJson(FILE).catch(() => ({ tasks: [] }));
  const id = data.tasks.length + 1;
  data.tasks.push({ id, title, dread, status: 'pending' });
  await fs.writeJson(FILE, data, { spaces: 2 });
}

export async function getTasks() {
  const data = await fs.readJson(FILE).catch(() => ({ tasks: [] }));
  return data.tasks;
}
