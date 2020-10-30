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
        Showing results for <span class="font-italic">{{ userFileName }}</span> <span class="font-weight-bold">click to reset</span>
      </v-alert>
      <v-container fluid>
        <v-row align="center" justify="center" class="text-center">
          <v-col cols="10" lg="4">
            <v-sheet
                outlined
                elevation="4"
                class="mx-auto pa-3"
                :style="`border-color: ${$vuetify.theme.currentTheme.accent};`"
            >
            <v-expansion-panels flat>
              <v-expansion-panel>
                <v-expansion-panel-header>
                      <span class="text-h6"
                      >Benchmark with your JSON! ({{ frameworks[selectedTab].title }})</span
                      >
                  <template v-slot:actions>
                    <v-icon color="primary">
                      $expand
                    </v-icon>
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <UserBenchmark
                      :frameworks="frameworks"
                      :selected-framework="selectedTab"
                      @input="userJsonSent"
                  />
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            </v-sheet>
          </v-col>
          <v-col cols="12" class="mt-5">
            <h1>Predefined JSONs</h1>
            <Results :charts-data="results[selectedTab]"></Results>
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
    userFileName() {
      const maxFileName = 25;
      let result = this.results[this.selectedTab];
      let fileName = result[0].title;
      return fileName.length > maxFileName
        ? fileName.substring(0, maxFileName-3) + "..."
        : fileName;
    },
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
      future: { title: "More on the way", icon: "mdi-dots-horizontal" },
      // java: { title: "Java", icon: "mdi-language-java" },
      // golang: { title: "Go", icon: "mdi-language-go" },
      // nodejs: { title: "Node", icon: "mdi-nodejs" },
      // ruby: { title: "Ruby", icon: "mdi-language-ruby" },
      // csharp: { title: "C#", icon: "mdi-dot-net" }
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
