const queries = {
  musicianFromCode(musicians, code) {
    return musicians
      .filter(m => m.code === code)[0];
  },
  albumsPlayedOn(albums, musician) {
    return albums
      .filter(a => a.musicians
        .map(m => m.name).includes(musician.name))
      .map(a => ({
        title: a.title,
        code: a.code,
        tracks: a.tracks,
      }));
  },
};

module.exports = queries;
