#!/usr/bin/env node
import { Command } from 'commander';
import add from './commands/add.js';
import list from './commands/list.js';
import complete from './commands/complete.js';
import status from './commands/status.js';

const program = new Command();
program.name('meltdown').description('CLI for emotional task management').version('0.1.0');

program.command('add <task>').description('Add a task and increase dread').action(add);
program.command('list').description('List your ongoing collapse').action(list);
program.command('complete <id>').description('Lie to yourself that it’s done').action(complete);
program.command('status').description('Show total existential dread').action(status);

program.parse();
