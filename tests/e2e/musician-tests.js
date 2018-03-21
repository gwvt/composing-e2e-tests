const camel = require('to-camel-case');

const instruments = require('./sequences/instruments/all.js');
const albums = require('./sequences/albums/all.js');
const helpers = require('./helpers.js');

const data = require('./data-api/data.js');
const queries = require('./data-api/queries.js');

const composeTests = {
  compose(musicianCode) {
    const musician = queries.musicianFromCode(data.musicians, musicianCode);
    musician.albumsPlayedOn = queries.albumsPlayedOn(data.albums, musician);

    const tests = {};

    tests[`${musician.name} opens the app`] = helpers.selectMusician.bind(null, musician, process);

    tests[`and thinks about ${musician.instruments.main}`] = instruments[musician.instruments.main].pages;

    musician.albumsPlayedOn.forEach((a) => {
      tests[`and remembers ${a.title}`] = albums[camel(a.code)].pages;
    });

    tests['and leaves the app'] = function test(browser) {
      browser.end();
    };

    return tests;
  },
};

module.exports = composeTests;
