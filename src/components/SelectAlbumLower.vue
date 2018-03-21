<template>
  <div>
    <div class="lower-content">
      <h5 class="title is-5">
        The musician selects an album configuration.
      </h5>
    </div>
    <div class="columns button-wrapper">
      <div class="column is-3">
        <a id="reconfigure-musician-button" class="button is-primary app-button" @click="reconfigureMusician">
          Reconfigure Musician
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectAlbumLower',
  methods: {
    reconfigureMusician() {
      this.$router.push({
        name: 'select-musician',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.button-wrapper {
  margin-top: 2rem;
}
</style>
