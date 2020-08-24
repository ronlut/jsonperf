<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo_old.png" />
    <Results msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Results from "@/components/Results.vue";

export default {
  name: "Home",
  components: {
    Results
  }
};
</script>
