<template>
  <div>
    <span class="text-sm-h5 text-h6">Benchmark with your JSON ({{ framework }})</span>
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
  </div>
</template>
<script>
export default {
  name: 'TestFile',
  props: {
    framework: {
      type: String,
      default: ""
    },
  },
  data() {
    return {
      file: null,
      rules: [
        // value => !value || value.size < 2000000 || 'File size must be less than 2 MB!',
        value => !value || value.size < 2 || 'File size must be less than 2 MB!',
      ],
    }
  },
  methods: {
    upload() {
      this.$emit('input', this.file)
      this.$refs.fileInput.reset();
    }
  }
}
</script>
