<template>
  <v-app-bar app dense clipped-left flat>
    <v-img
      class="mx-2"
      src="@/assets/logo.png"
      max-height="40"
      max-width="40"
      contain
    ></v-img>
    <v-spacer></v-spacer>
    <v-toolbar-title
      :style="$vuetify.breakpoint.smAndDown ? 'font-size: 0.8rem;' : ''"
      >JSON Libraries Performance Benchmark
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon href="https://github.com/ronlut/jsonperf" target="_blank" v-bind="attrs" v-on="on">
          <v-icon>mdi-github</v-icon>
        </v-btn>
      </template>
      <span>GitHub</span>
    </v-tooltip>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon @click="toggleDark" v-bind="attrs" v-on="on">
          <v-icon>mdi-brightness-6</v-icon>
        </v-btn>
      </template>
      <span>Toggle Theme</span>
    </v-tooltip>

    <template v-slot:extension>
      <v-tabs
        :value="value"
        centered
        grow
        show-arrows
        @change="$emit('input', $event)"
      >
        <v-tab
          v-for="(framework, key, i) in frameworks"
          :key="key"
          :href="`#${key}`"
          :disabled="i > 1"
        >
          <v-icon left>{{ framework.icon }}</v-icon>
          {{ framework.title }}
        </v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "TopBar",
  props: {
    value: null,
    frameworks: {}
  },
  computed: {
    ...mapState(["dark"])
  },
  methods: {
    toggleDark() {
      this.$store.commit("toggleDark");
      this.$vuetify.theme.dark = this.dark;
    }
  },
  created() {
    this.$vuetify.theme.dark = this.dark;
  }
};
</script>
