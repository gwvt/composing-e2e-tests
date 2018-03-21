<template>
  <div>
    <div class="text-content">
      <div class="columns is-centered title-wrapper">
        <div class="column is-6 has-text-centered">
          <h1 class="title is-1">
            {{ pageTitle }}
          </h1>
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column is-6 has-text-centered">
          <h5 id="page-text" class="title is-5">
            {{ page.text }}
          </h5>
        </div>
      </div>
    </div>
    <div class="columns is-centered">
      <div class="column has-text-centered">
        <transition name="fade">
          <a class="button is-primary app-button" v-if="showButton" @click="nextPage" id="next-page">
            Nice
          </a>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PagesUpper',
  data() {
    return {
      showButton: false,
    };
  },
  computed: {
    page() {
      const pageIndex = this.$route.params.pageId - 1;
      return this.$route.params.pageType === 'album' ? this.$store.state.albumPages[pageIndex] : this.$store.state.instrumentPages[pageIndex];
    },
    pageTitle() {
      let title = this.$route.params.pageType === 'album' ? this.$store.state.album.title : this.$store.state.musician.instruments.main;
      title = title.charAt(0).toUpperCase() + title.slice(1);
      return title;
    },
  },
  mounted() {
    setTimeout(this.startFadeIn, 1500);
  },
  methods: {
    toAnotherAlbumPage() {
      const nextPageId = Number(this.$route.params.pageId) + 1;
      this.$router.push({
        name: 'pages',
        params: {
          pageType: 'album',
          instrumentAlbum: this.$store.state.album.code,
          pageId: nextPageId,
        },
      });
    },
    toSelectAlbums() {
      this.$router.push({
        name: 'select-album',
        params: {
          musician: this.$store.state.musician.code,
          resetRadio: true,
        },
      });
    },
    nextPageFromAlbumPage() {
      if (this.$route.params.pageId < this.$store.state.albumPages.length) {
        this.toAnotherAlbumPage();
      } else {
        this.toSelectAlbums();
      }
    },
    nextPageFromInstrumentPage() {
      this.toSelectAlbums();
    },
    nextPage() {
      if (this.$route.params.pageType === 'album') {
        this.nextPageFromAlbumPage();
      } else {
        this.nextPageFromInstrumentPage();
      }
    },
    startFadeIn() {
      this.showButton = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.text-content {
  min-height: 18rem;
}

.title-wrapper {
  margin-bottom: 2rem;
}

.fade-enter-active {
  transition: opacity 2s;
}

.fade-enter {
  opacity: 0;
}
</style>
