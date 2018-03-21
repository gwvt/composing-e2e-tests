const queries = {
  mainInstruments(musicians) {
    let instruments = new Set();
    musicians.forEach((m) => {
      instruments.add(m.instruments.main);
    });
    instruments = [...instruments];
    return instruments;
  },
  instrumentsWithMusicians(musicians) {
    const instruments = this.mainInstruments(musicians);
    let musiciansThisInstrument;
    const instrumentsWithMusicians = instruments
      .map((i) => {
        musiciansThisInstrument = musicians
          .filter(m => m.instruments.main === i);
        return {
          instrument: i,
          musicians: musiciansThisInstrument,
        };
      });
    return instrumentsWithMusicians;
  },
  musicianFromName(musicians, name) {
    return musicians
      .filter(m => m.name === name)[0];
  },
  albumFromTitle(albums, title) {
    return albums
      .filter(a => a.title === title)
      .map(a => ({
        title: a.title,
        code: a.code,
        tracks: a.tracks,
      }))[0];
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
  instrumentPages(instrumentsPages, instrumentName) {
    return instrumentsPages
      .filter(ip => ip.instrument === instrumentName)
      .map(ip => ip.pages)[0];
  },
  albumPages(albumsPages, album) {
    return albumsPages
      .filter(ap => ap.albumTitle === album.title)
      .map(ap => ap.pages)[0];
  },
};

export default queries;
