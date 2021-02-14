const fetch = require('node-fetch')

exports.getFavourites = async (currencies) => {
  const API_TOKEN = process.env.API_KEY;
  const res = await fetch(`https://api.nomics.com/v1/currencies/ticker?key=${API_TOKEN}&ids=${currencies.join(',')}&interval=1h&convert=USD`);
  const data = await res.json();

  return data;
}