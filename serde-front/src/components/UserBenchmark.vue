<template>
  <v-sheet
    outlined
    elevation="4"
    class="mx-auto pa-10"
    :style="`border-color: ${$vuetify.theme.currentTheme.accent};`"
  >
    <span class="text-sm-h5 text-h6"
      >Benchmark with your JSON ({{ framework }})</span
    >
    <v-file-input
      v-model="file"
      ref="fileInput"
      accept="application/json"
      placeholder="Select a JSON file"
      :rules="rules"
      prepend-icon="mdi-code-json"
      show-size
    ></v-file-input>
    <v-btn
      @click="upload"
      x-large
      :loading="loading"
      :color="$vuetify.theme.currentTheme.success"
      :disabled="!file || $refs.fileInput.hasError"
    >
      Test!
    </v-btn>
  </v-sheet>
</template>
<script>
import axios from "axios";

export default {
  name: "UserBenchmark",
  props: {
    framework: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      file: null,
      loading: false,
      rules: [
        value => !value || value.size < 2 || "File size must be less than 2 MB!"
      ]
    };
  },
  methods: {
    upload() {
      this.loading = true;
      let formData = new FormData();
      formData.append("file", this.file);
      let uploadPromise = axios.post("/python3", formData, {
        baseURL: process.env.VUE_APP_API_BASE_URL, // todo: one instance per app
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      uploadPromise.finally(() => {
        this.$refs.fileInput.reset();
        this.loading = false;
      });
      this.$emit("input", uploadPromise);
    }
  }
};
</script>
