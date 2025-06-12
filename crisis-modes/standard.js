export function snarkForAdd(task, dread) {
  const snarks = [
    `“${task}”? That’s cute.`,
    `Fantastic. Just what your mental health needed. Dread +${dread}.`,
    `Why not? What’s one more brick on the anxiety pile.`,
    `Oh cool, another task you’ll ignore.`
  ];
  return snarks[Math.floor(Math.random() * snarks.length)];
}
