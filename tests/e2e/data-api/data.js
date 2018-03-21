const albumsPages = require('../../../src/data-api/albums-pages.json');
const albums = require('../../../src/data-api/albums.json');
const instrumentsPages = require('../../../src/data-api/instruments-pages.json');
const musicians = require('../../../src/data-api/musicians.json');

module.exports = {
  albumsPages: albumsPages.albumsPages,
  albums: albums.albums,
  instrumentsPages: instrumentsPages.instrumentsPages,
  musicians: musicians.musicians,
};
