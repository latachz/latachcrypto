'use strict';

const chalk = require('chalk');
const { removeCurrency } = require("../../lib/changeData");

module.exports = async (symbol) => {
  try {
    removeCurrency(symbol)
    console.log(chalk.green(`Removed crypto with ${symbol} symbol`))
  } catch (error) {
    console.error(chalk.red('Error - cannot add currency.'));
  }
}