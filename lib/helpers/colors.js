const chalk = require('chalk');

module.exports.chooseColor = (text, color) => {
  const colors = {
    "yellow": chalk.yellow(text),
    "blue": chalk.blue(text),
    "orange": chalk.rgb(247,147,26)(text),
    "gold": chalk.rgb(201, 157, 102)(text)
  }

  return colors[color];
}