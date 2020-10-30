<template>
  <div>
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
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "UserBenchmark",
  props: {
    selectedFramework: {
      type: String,
      default: ""
    },
    frameworks: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      file: null,
      loading: false,
      rules: [
        value => !value || value.size < 2 * 1024 * 1024 || "File size must be less than 2 MB!"
      ]
    };
  },
  methods: {
    upload() {
      this.loading = true;
      let formData = new FormData();
      formData.append("file", this.file);
      let uploadPromise = axios.post(`/${this.selectedFramework}`, formData, {
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
