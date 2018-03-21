const saxophone = require('../sequences/instruments/saxophone.js');
const aja = require('../sequences/albums/aja.js');
const gaucho = require('../sequences/albums/gaucho.js');
const helpers = require('../helpers.js');

const musician = {
  code: 'toms',
};

module.exports = {
  'Tom Scott opens the app': (browser) => {
    (helpers.selectMusician)(browser, process, musician);
  },
  'and thinks about saxophone': saxophone.pages,
  'and remembers Aja': aja.pages,
  'and remembers Gaucho': gaucho.pages,
  'and leaves the app': (browser) => {
    browser
      .end();
  },
};
