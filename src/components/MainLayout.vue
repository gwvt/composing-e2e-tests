<template>
  <div :id="mainLayoutId">
    <div class="upper-layout">
      <component :is="`${this.$route.name}Upper`"/>
    </div>
    <hr />
    <div class="lower-layout">
      <div class="columns is-centered">
        <div class="column is-4 has-text-centered">
          <pre>----hood----</pre>
        </div>
      </div>
      <div>
        <component :is="`${this.$route.name}Lower`"/>
      </div>
    </div>
  </div>
</template>

<script>
import SelectMusicianUpper from './SelectMusicianUpper.vue';
import SelectMusicianLower from './SelectMusicianLower.vue';
import SelectAlbumUpper from './SelectAlbumUpper.vue';
import SelectAlbumLower from './SelectAlbumLower.vue';
import PagesUpper from './PagesUpper.vue';
import PagesLower from './PagesLower.vue';

export default {
  name: 'MainLayout',
  components: {
    SelectMusicianUpper,
    SelectMusicianLower,
    SelectAlbumUpper,
    SelectAlbumLower,
    PagesUpper,
    PagesLower,
  },
  computed: {
    mainLayoutId() {
      let id = '';
      if (this.$route.name === 'pages') {
        id = `${this.$route.params.pageType}-${this.$route.params.instrumentAlbum}-${this.$route.params.pageId}`;
      } else {
        id = this.$route.name;
      }
      return id;
    },
  },
};
</script>

<style lang="scss" scoped>
.upper-layout {
  min-height: 25rem;
  margin: 2rem;
}

.lower-layout {
  margin: 3rem 2rem 2rem 2rem;
}
</style>
