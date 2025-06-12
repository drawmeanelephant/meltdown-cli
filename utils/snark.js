import fs from 'fs-extra';
import yaml from 'yaml';

let overridesLoaded = false;
let overrideSnarks = {};

function loadOverrides() {
  if (overridesLoaded) return;
  overridesLoaded = true;
  const crisis = process.env.CRISIS;
  if (!crisis) return;
  const file = `./data/${crisis}-snark.yaml`;
  if (fs.existsSync(file)) {
    const text = fs.readFileSync(file, 'utf8');
    overrideSnarks = yaml.parse(text) || {};
  }
}

function format(template, ctx = {}) {
  return template.replace(/\${(.*?)}/g, (_, k) => ctx[k] ?? '');
}

function getSnark(type, defaults, ctx) {
  loadOverrides();
  const snarks = overrideSnarks[type] || defaults;
  const template = snarks[Math.floor(Math.random() * snarks.length)];
  return format(template, ctx);
}

export function snarkForAdd(task, dread) {
  const defaults = [
    `“${task}”? That’s cute.`,
    `Fantastic. Just what your mental health needed. Dread +${dread}.`,
    `Why not? What’s one more brick on the anxiety pile.`,
    `Oh cool, another task you’ll ignore.`
  ];
  return getSnark('add', defaults, { task, dread });
}

export function snarkForComplete(task) {
  const defaults = [
    `Congrats on completing “${task}”. Like that will help.`,
    `Done? Sure. Let's see how long that lasts.`,
    `One less thing to fail at, I guess.`,
    `Fine, fine, take your gold star for finishing “${task}”.`
  ];
  return getSnark('complete', defaults, { task });
}

export function snarkForList(count) {
  const defaults = [
    `Here’s your to-do nightmare in ${count} exciting parts.`,
    `Still working on these ${count}? Adorable.`,
    `Behold, ${count} monuments to procrastination.`,
    `Great, ${count} tasks. Just what you needed.`
  ];
  return getSnark('list', defaults, { count });
}
