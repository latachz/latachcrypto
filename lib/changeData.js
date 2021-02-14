const fs = require('fs')
const path = require('path')

module.exports.addCurrency = (currency) => {
  fs.readFile(path.join(__dirname, 'data.json'), function(err, data) {
    if (err)
        throw err;
    let content = JSON.parse(data);
    content.currencies.push(currency.toUpperCase());
    content.currencies = [...new Set(content.currencies)]
    fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(content), function(err) {
        if (err)
            throw err;
    });
});
}

module.exports.removeCurrency = (currency) => {
  fs.readFile(path.join(__dirname, 'data.json'), function(err, data) {
    if (err)
        throw err;
    let content = JSON.parse(data);
    content.currencies = content.currencies.filter(el => el !== currency.toUpperCase());
    fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(content), function(err) {
        if (err)
            throw err;
    });
});
}

