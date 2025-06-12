export function snarkForAdd(task, dread) {
  const snarks = [
    `Woo! “${task}” sounds fun! Dread +${dread}? More like excitement!`,
    `Look at you go, tackling “${task}”.`,
    `Positive vibes only—ignore the dread counter.`,
    `Keep smiling while adding “${task}”!`
  ];
  return snarks[Math.floor(Math.random() * snarks.length)];
}
