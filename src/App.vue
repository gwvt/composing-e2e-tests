<template>
  <div id="app">
      <router-view :key="$route.path"/>
  </div>
</template>

<script>
</script>

<style lang="scss">
@import "~bulmaswatch/darkly/_variables";
@import "~bulma/sass/utilities/_all";

$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert)
);

$link: $info;
$link-invert: $info-invert;
$link-focus-border: $info;

@import "~bulma";
@import "~bulmaswatch/darkly/_overrides";
@import "~buefy/src/scss/buefy";

.is-centered-vertically {
  display: flex;
  align-items: center;
}

.is-centered-vertically-horizontally {
  display: flex;
  align-items: center;
  justify-content: center;
}

.app-button {
  min-width: 12rem;
}

.button-lower-right-wrapper {
  margin: 2rem 3rem 0 0;
}
</style>
