<script setup>
import seriesCell from './seriesCell.vue';

defineProps({
  title: String,
  data: Array
})
</script>

<template>
  <div class="series-grid">
    <div class="series-grid_title">
      <el-icon size="20">
        <CollectionTag/>
      </el-icon>
      {{ title }}
    </div>
    <div class="series-grid_content">
      <el-space :size="10" wrap>
        <series-cell v-for="item in data" v-bind="item"/>
      </el-space>

      <el-empty v-if="!data.length" :image-size="50" description="敬请期待"/>
    </div>
  </div>
</template>

<style scoped>
.series-grid {
  max-width: calc(var(--vp-layout-max-width) - 64px);
  margin: 0 0 15px 0;
  padding: 0 0 15px 0;
  border: 1px solid;
  border-color: var(--fd-t-border-color-def);
}

.series-grid:hover {
  border-color: var(--fd-t-border-color-hover-def);
}

.series-grid .series-grid_title {
  margin: 10px;
  padding-bottom: 5px;
  font-size: larger;
  font-weight: bold;
  border-bottom: 1px solid;
  border-color: var(--fd-t-border-color-def);
}

.series-grid .series-grid_title .el-icon {
  display: inline-block;
  padding: 4px 0 0 3px;
}

.series-grid .series-grid_content {
  margin-left: 17px;
}

.series-grid .series-grid_content .el-empty {
  height: 120px;
  margin-right: 17px;
  padding: 0;
}

.series-grid .series-grid_content .el-empty :deep(.el-empty__description) {
  margin: 10px 0 10px 0;
}
</style>
