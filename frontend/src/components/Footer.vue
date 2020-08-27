<template>
  <v-footer app absolute :style="footerColor">
    <v-col class="text-center text-caption" cols="12">
      made with
      <v-icon dense color="red">mdi-heart</v-icon>
      by <a href="https://www.linkedin.com/in/ronlut/">ronlut</a>
      |
      icons by
      <a
        href="https://www.flaticon.com/authors/phatplus"
        title="phatplus"
        target="_blank"
        >phatplus</a
      >
    </v-col>
  </v-footer>
</template>
<script>
export default {
  name: "Footer",
  computed: {
    footerColor() {
      return this.$vuetify.theme.dark ? "" : "background-color: #f5f5f5;";
    }
  }
};
</script>
