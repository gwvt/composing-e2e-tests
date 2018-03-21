const guitar = require('../sequences/instruments/guitar.js');
const aja = require('../sequences/albums/aja.js');
const gaucho = require('../sequences/albums/gaucho.js');
const katyLied = require('../sequences/albums/katy-lied.js');
const theRoyalScam = require('../sequences/albums/the-royal-scam.js');
const helpers = require('../helpers.js');

const musician = {
  code: 'larryc',
};

module.exports = {
  'Larry Carlton opens the app': (browser) => {
    (helpers.selectMusician)(browser, process, musician);
  },
  'and thinks about guitar': guitar.pages,
  'and remembers Aja': aja.pages,
  'and remembers Gaucho': gaucho.pages,
  'and remembers Katy Lied': katyLied.pages,
  'and remembers The Royal Scam': theRoyalScam.pages,
  'and leaves the app': (browser) => {
    browser
      .end();
  },
};
