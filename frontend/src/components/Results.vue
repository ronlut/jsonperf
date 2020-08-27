<template>
  <v-container>
    <v-row class="text-center" align="center" justify="center">
      <v-col
        v-for="(chartData, chartName) in chartsData"
        :key="chartName"
        cols="12"
        lg="6"
      >
        <span class="text-body-1">{{ chartName }}</span>
        <v-chart
          autoresize
          :options="generateOptions(chartName, chartData)"
          :theme="chartTheme"
        ></v-chart>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";
import "echarts/lib/component/title";
import "echarts/lib/component/dataset";
import "echarts/lib/component/toolbox";

export default {
  name: "Results",
  props: {
    chartsData: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  methods: {
    generateOptions(title, dataset) {
      let containLabel = this.$vuetify.breakpoint.smAndDown;
      let options = {
        grid: {
          containLabel: containLabel
        },
        backgroundColor: this.$vuetify.theme.dark ? "#121212" : undefined, // todo: get from current theme
        // title: {
        //   top: 22,
        //   text: title,
        // },
        toolbox: {
          feature: {
            saveAsImage: {
              title: "Save as PNG"
            }
          }
        },
        legend: {},
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        dataset: {
          source: dataset
        },
        xAxis: { type: "category" },
        yAxis: {
          type: "value",
          // axisLabel: {
          //   formatter: "{value} ms"
          // }
          name: "Time (ms)",
          nameLocation: "middle",
          nameGap: 45
        },
        series: []
      };
      for (let i = 0; i < dataset[0].length - 1; i++) {
        options.series.push({ type: "bar" });
      }
      return options;
    }
  },
  computed: {
    chartTheme() {
      return this.$vuetify.theme.dark ? "dark" : "light"; // light
    }
  },
  data: () => ({})
};
</script>

<style>
div.echarts {
  min-height: 400px;
  width: 100%;
  height: 100%;
}
</style>
