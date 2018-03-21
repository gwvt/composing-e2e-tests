<template>
  <div>
    <div class="columns">
      <div class="column is-5 is-centered-vertically column-content">
        <h3 class="title is-3">
          {{ musician }}, which album do you want to relive?
        </h3>
      </div>
      <div class="column is-3 is-centered-vertically column-content">
        <div>
          <div class="field radio-wrapper">
            <b-radio v-model="selectedAlbumTitle" :native-value="null" id="select-no-album" size="is-medium">
              None
            </b-radio>
          </div>
          <div v-for="album in albums" :key="album.title" class="field radio-wrapper">
            <b-radio v-model="selectedAlbumTitle" :native-value="album.title" :id="`select-${album.code}`" size="is-medium">
              {{ album.title }}
            </b-radio>
          </div>
        </div>
      </div>
    </div>
    <div class="columns button-lower-right-wrapper">
      <div class="column is-3 is-offset-9">
        <a class="button is-primary app-button is-pulled-right" @click="nextPage"
        :disabled="!selectedAlbumTitle" id="next-page">
        I'm Ready
      </a>
    </div>
  </div>
</div>
</template>

<script>
import { albums } from '../data-api/albums.json';
import { albumsPages } from '../data-api/albums-pages.json';
import queries from '../data-api/queries';

export default {
  name: 'SelectAlbumUpper',
  data() {
    return {
      selectedAlbumTitle: null,
    };
  },
  computed: {
    musician() {
      return this.$store.state.musician.name;
    },
    albums() {
      return this.$store.state.musician.albumsPlayedOn;
    },
    album() {
      return queries.albumFromTitle(albums, this.selectedAlbumTitle) || null;
    },
    albumPages() {
      let pages = null;
      if (this.selectedAlbumTitle) {
        pages = queries.albumPages(albumsPages, this.album);
      }
      return pages;
    },
  },
  watch: {
    selectedAlbumTitle() {
      if (this.selectedAlbumTitle) {
        this.configureAlbum();
      }
    },
  },
  mounted() {
    this.setInitialRadioValue();
  },
  methods: {
    configureAlbum() {
      this.$store.commit('configureAlbum', this.album);
      this.$store.commit('configureAlbumPages', this.albumPages);
    },
    nextPage() {
      if (this.selectedAlbumTitle) {
        this.$router.push({
          name: 'pages',
          params: {
            pageType: 'album',
            instrumentAlbum: this.$store.state.album.code,
            pageId: 1,
          },
        });
      }
    },
    unconfigureAlbum() {
      this.$store.commit('unconfigureAlbum', this.album);
      this.$store.commit('unconfigureAlbumPages', this.album);
    },
    setInitialRadioValue() {
      let radioValue = null;
      if (!this.$route.params.resetRadio && this.$store.state.album) {
        radioValue = this.$store.state.album.title;
      }
      this.selectedAlbumTitle = radioValue;
    },
  },
};
</script>

<style lang="scss" scoped>
.column-content {
  min-height: 20rem;
}

.radio-wrapper {
  margin: 1rem;
}
</style>
