<template>
  <v-container>
    <v-row class="text-center" align="center" justify="center">
      <v-col v-for="(chartData, chartName) in chartsData" :key="chartName" cols="12" lg="6">
        <v-chart style="" class="" autoresize :options="generateOptions(chartName, chartData)" :theme="chartTheme"></v-chart>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
import 'echarts/lib/component/dataset'
import 'echarts/lib/component/toolbox'
export default {
  name: "Results",
  props: {
    chartsData: {
      type: Object,
      default: function () {
        return {
          "tiny (50 bytes)": [
            ['test', 'rapid', 'ujson', 'bla', 'bla2'],
            ['serialize', 0.0001, 0.0004, 0.0004, 0.0004],
            ['deserialize', 0.0005, 0.0002, 0.0004, 0.0004],
            // ['serialize (3.5 kb)', 0.0005, 0.0002],
            // ['deserialize (3.5 kb)', 0.0005, 0.0002],
          ],
          "small (3.5 kb)": [
            ["test", "rapid", "ujson"],
            ['serialize', 0.0001, 0.0004],
            ['deserialize', 0.0005, 0.0002],
            // ['serialize (3.5 kb)', 0.0005, 0.0002],
            // ['deserialize (3.5 kb)', 0.0005, 0.0002],
          ],
          "large (50 bytes)": [
            ["test", "rapid", "ujson"],
            ['serialize', 0.0001, 0.0004],
            ['deserialize', 0.0005, 0.0002],
            // ['serialize (3.5 kb)', 0.0005, 0.0002],
            // ['deserialize (3.5 kb)', 0.0005, 0.0002],
          ],
          "llarge (50 bytes)": [
            ["test", "rapid", "ujson"],
            ['serialize', 0.0001, 0.0004],
            ['deserialize', 0.0005, 0.0002],
            // ['serialize (3.5 kb)', 0.0005, 0.0002],
            // ['deserialize (3.5 kb)', 0.0005, 0.0002],
          ]
        }
      }
    },
  },
  methods: {
    generateOptions(title, dataset) {
      let options = {
        backgroundColor: this.$vuetify.theme.dark ? "#121212" : undefined, // todo: get from current theme
        title: {
          top: 22,
          text: title,
        },
        toolbox: {
          feature: {
            saveAsImage: {
              title: "Save as PNG"
            },
          }
        },
        legend: {},
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        dataset: {
          source: dataset,
        },
        xAxis: { type: 'category' },
        yAxis: {},
        series: []
      };
      for (let i=0; i < dataset[0].length - 1; i++) {
        options.series.push({ type: 'bar' });
      }
      return options;
    }
  },
  computed: {
    chartTheme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  },
  data: () => ({

  })
};
</script>

<style>
  div.echarts {
    min-height: 300px;
    width: 100%;
    height: 100%;
  }
</style>
