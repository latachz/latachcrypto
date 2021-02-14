#!/usr/bin/env node

require('dotenv').config()

const allCommand = require('./commands/all');
const addCommand = require('./commands/add');
const removeCommand = require('./commands/remove');

const path = require('path');
const program = require('commander');
const chalk = require('chalk');

const pkg = require(path.join(__dirname, '../package.json'));

program
    .version(pkg.version)
    .description(`Get all ${chalk.yellow('crypto')} data`);

program
  .command('all')
  .alias('g')
  .description('Gets all data about added cryptocurrencies')
  .action(() => allCommand());

program
  .command('add [symbol]')
  .alias('a')
  .description('Add currency.')
  .action((symbol) => {
    addCommand(symbol)
  });

program
  .command('remove [symbol]')
  .alias('rm')
  .description('Remove currency.')
  .action((symbol) => {
    removeCommand(symbol)
  });

program.on('command:*', () => {
  console.error(chalk.red('Invalid command: ', program.args.join(' ')) + '\n');
  console.error(chalk.red('See --help for a list of available commands.') + '\n');

  process.exit(1);
});

if (!process.argv.slice(2).length) {
  console.warn(chalk.yellow('No command specified!' + '\n'));

  // program.outputHelp(help => chalk.yellow(help));
  program.addHelpText('after', `
Example call:
  $ crypto [command]`);

  program.help();

  process.exit(1);
}

program.parse(process.argv);