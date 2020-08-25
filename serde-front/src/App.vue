<template>
  <v-app>
    <TopBar
        v-model="selectedTab"
        :frameworks="frameworks"
        @input="tabChanged"
    />
    <v-main>
      <v-alert
          v-model="showAlert"
          type="warning"
          border="left"
          elevation="2"
          @click="clearUserSelection"
          class="text-center"
          style="cursor: pointer"
      >
        Showing custom results - <b>click to reset</b>
      </v-alert>
      <v-container fluid>
        <v-row align="center" justify="center" class="text-center">
          <v-col cols="12">
            <Results :charts-data="results[selectedTab]"></Results>
          </v-col>
          <v-divider></v-divider>
          <v-col cols="10" lg="4">
            <TestFile :framework="frameworks[selectedTab].title" @input="upload" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <AppFooter />
    <v-snackbar
        v-model="showSnackbar"
        top
        color="info"
        :timeout="4000"
    >
      Custom JSON result in was reset
    </v-snackbar>
  </v-app>
</template>

<script>
import Results from "@/components/Results";
import PYTHON3_WEEKLY from '@/data/python3.json'
import PYTHON2_WEEKLY from '@/data/python2.json'
import JAVA_WEEKLY from '@/data/java.json'
import AppFooter from "@/components/AppFooter";
import TestFile from "@/components/TestFile";
import TopBar from "@/components/TopBar";

export default {
  components: {TopBar, TestFile, AppFooter, Results },
  WEEKLY_RESULTS: {
    python2: PYTHON2_WEEKLY,
    python3: PYTHON3_WEEKLY,
    java: JAVA_WEEKLY
  },
  props: {
    source: String
  },
  computed: {
    results() {
      let results = Object.assign({}, this.$options.WEEKLY_RESULTS);
      if (!this.userResults) {
        return results;
      }

      results[this.selectedTab] = this.userResults;
      return results;
    },
    showAlert() {
      return !!this.userResults;
      // todo: per tab?
    }
  },
  data: () => ({
    showSnackbar: false,
    userResults: null,
    frameworks: {
      'python2': {title: 'Python 2', icon: 'mdi-language-python'},
      'python3': {title: 'Python 3', icon: 'mdi-language-python'},
      'java': {title: 'Java', icon: 'mdi-language-java'},
    },
    selectedTab: "python2",
  }),
  methods: {
    upload(file) {
      console.log(file);
      this.scrollToTop();
      this.userResults = PYTHON3_WEEKLY; // todo: delete
      // todo: show notification
      // todo: send to backend, if successful set result to userResults
      // todo: clean userResults when clearing notification
    },
    clearUserSelection() {
      this.userResults = null;
    },
    scrollToTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    },
    tabChanged() {
      this.scrollToTop();

      if (!this.userResults) {
        return;
      }

      this.showSnackbar = true;
      this.clearUserSelection();
    }
  },
};
</script>
