const camel = require('to-camel-case');

const instruments = require('../sequences/instruments/all.js');
const albums = require('../sequences/albums/all.js');
const helpers = require('../helpers.js');

const data = require('../data-api/data.js');
const queries = require('../data-api/queries.js');

const musicianCode = 'toms';

const musician = queries.musicianFromCode(data.musicians, musicianCode);
musician.albumsPlayedOn = queries.albumsPlayedOn(data.albums, musician);

const tests = {};

tests[`${musician.name} opens the app`] = function test(browser) {
  (helpers.selectMusician.bind(this, browser, process, musician))();
};

tests[`and thinks about ${musician.instruments.main}`] = instruments[musician.instruments.main].pages;

musician.albumsPlayedOn.forEach((a) => {
  tests[`and remembers ${a.title}`] = albums[camel(a.code)].pages;
});

tests['and leaves the app'] = function test(browser) {
  browser.end();
};

module.exports = tests;
