<template>
  <div>
    <div class="header">
      <div class="columns">
        <div class="column is-10 is-offset-1 has-text-centered">
          <h1 class="title is-1">
            In the Studio with Steely Dan
          </h1>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4 is-offset-8">
          <h2 class="title is-2 is-italic">
            My Memories
          </h2>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-4 has-text-centered">
        <div class="image-wrapper">
          <img src="../../static/img/donald.jpg" alt="donald">
        </div>
        <div>
          <h4 class="title is-4">
            Donald
          </h4>
        </div>
      </div>
      <div class="column is-4 has-text-centered">
        <div class="image-wrapper">
          <img src="../../static/img/walter.jpg" alt="walter">
        </div>
        <div>
          <h4 class="title is-4">
            Walter
          </h4>
        </div>
      </div>
      <div class="column is-4 has-text-centered">
        <div class="image-wrapper is-centered-vertically-horizontally">
          <h3 class="title is-3">
            {{ musician }}
          </h3>
        </div>
        <div>
          <h4 class="title is-4">
            Me
          </h4>
        </div>
      </div>
    </div>
    <div class="columns button-lower-right-wrapper">
      <div class="column is-3 is-offset-9">
        <a class="button is-primary app-button is-pulled-right" @click="nextPage" :disabled="!musician" id="next-page">
          Take me back
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectMusicianUpper',
  computed: {
    musician() {
      return this.$store.state.musician ? this.$store.state.musician.name : null;
    },
  },
  methods: {
    nextPage() {
      if (this.musician) {
        this.$router.push({
          name: 'pages',
          params: {
            musician: this.$store.state.musician.code,
            pageType: 'instrument',
            instrumentAlbum: this.$store.state.musician.instruments.main,
            pageId: 1,
          },
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  margin-bottom: 3rem;
}

.image-wrapper {
  min-height: 18rem;
}
</style>
