'use strict';

const chalk = require('chalk');
const { addCurrency } = require("../../lib/changeData");

module.exports = async (symbol) => {
  try {
    addCurrency(symbol)
    console.log(chalk.green(`Added crypto with ${symbol} symbol`))
  } catch (error) {
    console.error(chalk.red('Error - cannot add currency.'));
  }
}