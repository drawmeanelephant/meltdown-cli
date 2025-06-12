export function snarkForAdd(task, dread) {
  const snarks = [
    `Adding “${task}” only hastens the apocalypse. Dread +${dread}.`,
    `Another step toward inevitable ruin.`,
    `Hope was overrated anyway.`,
    `Embrace the void; “${task}” will.`
  ];
  return snarks[Math.floor(Math.random() * snarks.length)];
}
