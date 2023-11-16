<script setup>
import seriesGrid from '../../components/seriesGrid.vue';
import { periodList } from '../../data/series/series';

</script>

<template>
  <div id="page-series">
    <series-grid v-for="period of periodList" v-bind="period"/>
  </div>
</template>

<style scoped>
#page-series {
  max-width: calc(var(--vp-layout-max-width) - 64px);
  margin: 32px auto;
}

</style>
