const guitar = require('../sequences/instruments/guitar.js');
const aja = require('../sequences/albums/aja.js');

module.exports = {
  'Larry Carlton opens the app': (browser) => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#select-musician', 5000)
      .click('#select-larryc')
      .click('#next-page');
  },
  'and thinks about guitar': guitar.pages,
  'and remembers Aja': aja.pages,
  'and leaves the app': (browser) => {
    browser
      .end();
  },
};
