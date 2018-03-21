<template>
  <div class="columns">
    <div class="column">
      <div class="columns">
        <div class="column header">
            <h4 class="title is-4">
              Configure for a musician:
            </h4>
        </div>
      </div>
      <div class="columns">
        <div class="column is-2">
          <div class="field radio-wrapper">
            <b-radio v-model="selectedMusicianName" :native-value="null" id="select-no-musician">
              None
            </b-radio>
          </div>
        </div>
        <div class="column is-2" v-for="instrument in instrumentsWithMusicians" :key="instrument.instrument">
          <div class="heading">
            <h6 class="title is-6">
              {{ instrument.instrument }}
            </h6>
          </div>
          <div v-for="musician in instrument.musicians" :key="musician.name" class="field radio-wrapper">
              <b-radio v-model="selectedMusicianName" :native-value="musician.name" :id="`select-${musician.code}`">
                {{ musician.name }}
              </b-radio>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { musicians } from '../data-api/musicians.json';
import { albums } from '../data-api/albums.json';
import { instrumentsPages } from '../data-api/instruments-pages.json';
import queries from '../data-api/queries';

export default {
  name: 'SelectMusicianLower',
  data() {
    return {
      selectedMusicianName: null,
    };
  },
  computed: {
    selectedMusician() {
      let musician = null;
      if (this.selectedMusicianName) {
        musician = queries.musicianFromName(musicians, this.selectedMusicianName);
        musician.albumsPlayedOn = queries.albumsPlayedOn(albums, musician);
      }
      return musician;
    },
    instrumentsWithMusicians() {
      return queries.instrumentsWithMusicians(musicians);
    },
    instrumentPages() {
      let pages = null;
      if (this.selectedMusicianName) {
        pages = queries.instrumentPages(instrumentsPages, this.selectedMusician.instruments.main);
      }
      return pages;
    },
  },
  watch: {
    selectedMusicianName() {
      if (this.selectedMusicianName) {
        this.configureMusician();
      } else {
        this.unconfigureMusician();
      }
    },
  },
  mounted() {
    this.setInitialRadioValue();
  },
  methods: {
    configureMusician() {
      this.$store.commit('configureMusician', this.selectedMusician);
      this.$store.commit('configureInstrumentPages', this.instrumentPages);
    },
    unconfigureMusician() {
      this.$store.commit('unconfigureMusician');
      this.$store.commit('unconfigureInstrumentPages');
    },
    setInitialRadioValue() {
      this.selectedMusicianName = this.$store.state.musician ? this.$store.state.musician.name : null;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  margin-bottom: 1rem;
}

.radio-wrapper {
  margin: .5rem;
}
</style>
