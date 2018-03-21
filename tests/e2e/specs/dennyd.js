const guitar = require('../sequences/instruments/guitar.js');
const aja = require('../sequences/albums/aja.js');

module.exports = {
  'Denny Dias opens the app': (browser) => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#select-musician', 5000)
      .click('#select-dennyd')
      .click('#next-page');
  },
  'and thinks about guitar': guitar.pages,
  'and remembers Aja': aja.pages,
  'and leaves the app': (browser) => {
    browser
      .end();
  },
};
