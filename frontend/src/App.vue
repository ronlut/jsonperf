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
            <UserBenchmark
              :framework="frameworks[selectedTab].title"
              @input="userJsonSent"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer />
    <v-snackbar v-model="snackbar" top :color="snackbarColor" :timeout="4000">
      {{ snackbarText }}
    </v-snackbar>
  </v-app>
</template>

<script>
import Results from "@/components/Results";
import PYTHON3_RESULTS from "@/generated_results/python3.json"; // todo: ugly.
import PYTHON2_RESULTS from "@/generated_results/python2.json"; // todo: ugly.
import Footer from "@/components/Footer";
import UserBenchmark from "@/components/UserBenchmark";
import TopBar from "@/components/TopBar";

export default {
  components: { TopBar, UserBenchmark, Footer, Results },
  RESULTS: {
    python3: PYTHON3_RESULTS,
    python2: PYTHON2_RESULTS
  },
  props: {
    source: String
  },
  computed: {
    results() {
      let results = Object.assign({}, this.$options.RESULTS);
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
    loading: false,
    snackbar: false,
    snackbarText: "",
    snackbarColor: "",
    userResults: null,
    frameworks: {
      python3: { title: "Python 3", icon: "mdi-language-python" },
      python2: { title: "Python 2", icon: "mdi-language-python" },
      java: { title: "Java", icon: "mdi-language-java" },
      golang: { title: "Go", icon: "mdi-language-go" },
      javascript: { title: "JavaScript", icon: "mdi-language-javascript" },
      // ruby: { title: "Ruby", icon: "mdi-language-ruby" },
      // rust: { title: "Rust", icon: "mdi-language-rust" }, // todo: rust icon unavailable
      // c: { title: "C", icon: "mdi-language-c" },
      // cpp: { title: "C++", icon: "mdi-language-cpp" }
    },
    selectedTab: "python3"
  }),
  methods: {
    userJsonSent(promise) {
      promise
        .then(response => {
          this.scrollToTop();
          this.userResults = response.data; // todo: delete
        })
        .catch(error => {
          this.showSnackbar(
            `${error.message}: ${error.response.data}`,
            "error"
          );
        });
    },
    showSnackbar(text, color) {
      this.snackbarText = text;
      this.snackbarColor = color;
      this.snackbar = true;
    },
    clearUserSelection() {
      this.userResults = null;
    },
    scrollToTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    },
    tabChanged() {
      this.scrollToTop();

      if (!this.userResults) {
        return;
      }

      this.showSnackbar("Custom JSON result was reset", "info");
      this.clearUserSelection();
    }
  }
};
</script>
