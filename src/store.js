import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    musician: null,
    album: null,
    instrumentPages: null,
    albumPages: null,
  },
  mutations: {
    configureMusician(state, musician) {
      state.musician = musician;
    },
    unconfigureMusician(state) {
      state.musician = null;
    },
    configureAlbum(state, album) {
      state.album = album;
    },
    configureInstrumentPages(state, instrumentPages) {
      state.instrumentPages = instrumentPages;
    },
    unconfigureInstrumentPages(state) {
      state.instrumentPages = null;
    },
    configureAlbumPages(state, albumPages) {
      state.albumPages = albumPages;
    },
  },
});
