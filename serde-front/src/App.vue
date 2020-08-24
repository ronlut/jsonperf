<template>
  <v-app>
<!--               color="teal lighten-5"-->
    <v-app-bar app dense clipped-left flat>
      <v-img
          class="mx-2"
          src="@/assets/logo.png"
          max-height="40"
          max-width="40"
          contain
      ></v-img>
      <v-spacer></v-spacer>
      <v-toolbar-title :style="$vuetify.breakpoint.smAndDown ? 'font-size: 0.8rem;' : ''">JSON Libraries Performance Comparison</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="toggleDark">
        <v-icon>mdi-brightness-6</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs
            v-model="selectedTab"
            centered
            grow
            show-arrows
        >
          <v-tab
              v-for="(framework, key) in frameworks"
              :key="key"
              :href="`#${key}`"
          >
            <v-icon left>{{ framework.icon }}</v-icon>
            {{ framework.title }}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-main>
<!--          dismissible-->
<!--          close-icon="mdi-undo-variant"-->
      <v-alert
          v-model="showAlert"
          type="warning"
          border="left"
          elevation="2"
          @click="showAlert=false"
          class="text-center"
      >
       Showing custom results - click to reset
      </v-alert>
      <v-container class="" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12">
            <Results :charts-data="results[selectedTab]"></Results>
          </v-col>
        </v-row>
        <v-row align="center" justify="center" class="text-center">
          <v-col sm="8" lg="4">
            <span class="text-sm-h4 text-h5">Test a custom JSON file</span>
            <v-file-input
                v-model="file"
                ref="fileInput"
                accept="application/json"
                placeholder="Select a JSON file"
                :rules="rules"
                prepend-icon="mdi-code-json"
                show-size></v-file-input>
            <v-btn
                @click="upload"
                x-large
                :color="$vuetify.theme.currentTheme.success"
                :disabled="!file || $refs.fileInput.hasError"
            >
              Test!
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script>
import Results from "@/components/Results";
import {mapState} from 'vuex'
import PYTHON3_WEEKLY from '@/data/python3.json'
import PYTHON2_WEEKLY from '@/data/python2.json'
import JAVA_WEEKLY from '@/data/java.json'
import AppFooter from "@/components/AppFooter";

export default {
  components: {AppFooter, Results },
  weeklyResults: {
    python2: PYTHON2_WEEKLY,
    python3: PYTHON3_WEEKLY,
    java: JAVA_WEEKLY
  },
  props: {
    source: String
  },
  computed: {
    ...mapState(["dark"]),
    results() {
      let results = this.$options.weeklyResults;
      if (!this.userResults) {
        return results;
      }

      results[this.selectedTab] = this.userResults;
      return results;
    },
    showAlert() {
      return this.userResults;
      // todo: per tab?
    }
  },
  data: () => ({
    // showAlert: true,
    userResults: null,
    file: null,
    rules: [
      // value => !value || value.size < 2000000 || 'File size must be less than 2 MB!',
      value => !value || value.size < 2 || 'File size must be less than 2 MB!',
    ],
    frameworks: {
      'python2': {title: 'Python 2', icon: 'mdi-language-python'},
      'python3': {title: 'Python 3', icon: 'mdi-language-python'},
      'java': {title: 'Java', icon: 'mdi-language-java'},
    },
    selectedTab: null,
    drawer: null,
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),
  methods: {
    upload() {
      // this.file = null;
      this.$refs.fileInput.reset();
      this.userResults = PYTHON3_WEEKLY;
      // todo: show notification
      // todo: send to backend, if successful set result to userResults
      // todo: clean userResults when clearing notification
    },
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
