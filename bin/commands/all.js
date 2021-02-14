'use strict';

const chalk = require('chalk');
const crypto = require("../../lib/crypto");
const { currencies } = require("../../lib/data");
const { chooseColor } = require("../../lib/helpers/colors");

const currenciesTheme = (text, currency) => {
  const currenciesThemes = {
    "BTC": chooseColor(`₿ ${text}`, "orange"),
    "ETH": chooseColor(`Ξ ${text}`, "gold"),
    "default": chooseColor(text, "orange")
  }

  return currenciesThemes[currency] !== undefined ? currenciesThemes[currency] : currenciesThemes["default"];
}

module.exports = async () => {
  try {
    const formattedData = [];
    const cryptoCurrencies = await crypto.getFavourites(currencies);

    cryptoCurrencies.map(el => {
      formattedData.push({
        symbol: el.symbol,
        price: el.price
      })
    })
    
    console.log('')

    console.log(chalk.yellow('Current crypto prices:'))

    cryptoCurrencies.forEach((el, index) => {
        console.log(chalk.blue('---------------------------'))
        console.log(currenciesTheme(`${el.symbol} ${el.price} USD`, el.symbol))
      });
  } catch (error) {
    console.error(chalk.red('Error - unable fetch data from nomics API.'));
  }
}