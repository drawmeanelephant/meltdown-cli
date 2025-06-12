#!/usr/bin/env node
import { Command } from 'commander';
import add from './commands/add.js';
import list from './commands/list.js';
import complete from './commands/complete.js';
import status from './commands/status.js';
import edit from './commands/edit.js';
import purge from './commands/purge.js';
import backup from './commands/backup.js';
import restore from './commands/restore.js';

const program = new Command();
program.name('meltdown').description('CLI for emotional task management').version('0.1.0');

program.command('add <task>').description('Add a task and increase dread').action(add);
program.command('list').description('List your ongoing collapse').action(list);
program.command('complete <id>').description('Lie to yourself that it’s done').action(complete);
program.command('status').description('Show total existential dread').action(status);

program.command('edit <id>')
  .description('Regret something and rewrite it')
  .option('--title <title>', 'Update the task title')
  .option('--dread <dread>', 'Adjust the dread level')
  .action(edit);

program.command('purge')
  .description('Delete all tasks and maybe your past')
  .action(purge);

program.command('backup')
  .description('Export tasks in case nostalgia hits')
  .action(backup);

program.command('restore <file>')
  .description('Resurrect a backup file like nothing went wrong')
  .action(restore);

program.parse();
