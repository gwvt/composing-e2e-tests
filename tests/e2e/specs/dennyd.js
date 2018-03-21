const guitar = require('../sequences/instruments/guitar.js');
const aja = require('../sequences/albums/aja.js');
const katyLied = require('../sequences/albums/katy-lied.js');
const pretzelLogic = require('../sequences/albums/pretzel-logic.js');
const theRoyalScam = require('../sequences/albums/the-royal-scam.js');
const cantBuyAThrill = require('../sequences/albums/the-royal-scam.js');
const countdownToEcstasy = require('../sequences/albums/countdown-to-ecstasy.js');
const helpers = require('../helpers.js');

const musician = {
  code: 'dennyd',
};

module.exports = {
  'Denny Dias opens the app': (browser) => {
    (helpers.selectMusician)(browser, process, musician);
  },
  'and thinks about guitar': guitar.pages,
  'and remembers Aja': aja.pages,
  'and remembers Katy Lied': katyLied.pages,
  'and remembers Pretzel Logic': pretzelLogic.pages,
  'and remembers The Royal Scam': theRoyalScam.pages,
  'and remembers Can\'t Buy a Thrill': cantBuyAThrill.pages,
  'and remembers Countdown to Ecstasy': countdownToEcstasy.pages,
  'and leaves the app': (browser) => {
    browser
      .end();
  },
};
