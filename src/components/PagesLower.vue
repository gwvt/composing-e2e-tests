<template>
  <div class="lower-content">
    <h5 class="title is-5">
      {{ text }}
    </h5>
  </div>
</template>

<script>
export default {
  name: 'PagesLower',
  computed: {
    text() {
      let text = 'Album pages are displayed based on the user-selected album configuration.';
      if (this.$route.params.pageType === 'instrument') {
        text = 'An instrument page is displayed based on the musician configuration.';
      }
      return text;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
