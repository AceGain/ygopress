<script setup>
import {useRouter} from 'vitepress'
import {getSeries} from "../utils/ImgUtils";

const props = defineProps({
  sid: String,
  title: String,
  content: String,
  tags: {
    type: Array,
    default: ['?', '?', '?', '?', '?', '?']
  },
  link: String
})

const {go} = useRouter();
</script>

<template>
  <div class="series-cell">
    <el-card shadow="hover" @click="go(link)">
      <div class="series-cell_image">
        <el-image :src="getSeries(sid)">
          <template #error>
            <div class="image-slot">
              <PictureFilled/>
            </div>
          </template>
        </el-image>
      </div>
      <div class="series-cell_title">
        {{ title }}
      </div>
      <div class="series-cell_content">
        <span>{{ content }}</span>
      </div>
      <div class="series-cell_tag">
        <el-tag v-if="tags[0]" size="small" effect="dark">力量{{ tags[0] }}</el-tag>
        <el-tag v-if="tags[1]" size="small" effect="dark">技巧{{ tags[1] }}</el-tag>
        <el-tag v-if="tags[2]" size="small" effect="dark">维持{{ tags[2] }}</el-tag>
        <el-tag v-if="tags[3]" size="small" effect="dark">展开{{ tags[3] }}</el-tag>
        <el-tag v-if="tags[4]" size="small" effect="dark">阻断{{ tags[4] }}</el-tag>
        <el-tag v-if="tags[5]===0" size="small" effect="dark">先手</el-tag>
        <el-tag v-if="tags[5]===1" size="small" effect="dark">后手</el-tag>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.series-cell {
  height: var(--fd-c-series-cell-height-def);
  width: var(--fd-c-series-cell-width-def);
}

.series-cell .el-card {
  border-color: black;
}

.series-cell .el-card:hover {
  cursor: pointer;
  border-color: blue;
  box-shadow: 1px 1px 10px 1px dodgerblue;
}

.series-cell .el-card :deep(.el-card__body) {
  padding: 0;
}

.series-cell .series-cell_image {
  height: calc(var(--fd-c-series-cell-height-def) - 2px);
  width: calc(var(--fd-c-series-cell-height-def) - 2px);
  float: left;
}

.series-cell .series-cell_image .el-image {
  height: inherit;
  width: inherit;
}

.series-cell .series-cell_image .el-image .image-slot {
  height: inherit;
  width: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid;
  border-color: var(--fd-t-border-color-def);
}

.series-cell .series-cell_title {
  height: 34px;
  width: calc(var(--fd-c-series-cell-width-def) - var(--fd-c-series-cell-height-def));
  margin-left: calc(var(--fd-c-series-cell-height-def) - 2px);
  padding: 5px 10px;
  background: linear-gradient(135deg, #3778f0 15%, #17ead9);
  color: white;
  font-weight: bold;
}

.series-cell .series-cell_content {
  height: calc(var(--fd-c-series-cell-height-def) - 34px - 28px - 2px);
  width: calc(var(--fd-c-series-cell-width-def) - var(--fd-c-series-cell-height-def));
  margin-left: calc(var(--fd-c-series-cell-height-def) - 2px);
  padding: 5px 10px;
}

.series-cell .series-cell_content span {
  font-size: small;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.series-cell .series-cell_tag {
  height: 28px;
  width: calc(var(--fd-c-series-cell-width-def) - var(--fd-c-series-cell-height-def));
  margin-left: calc(var(--fd-c-series-cell-height-def) - 2px);
  background-color: whitesmoke;
}

.series-cell .series-cell_tag .el-tag {
  background-color: #3778f0;
  border-color: #3778f0;
}

.series-cell .series-cell_tag .el-tag:first-child {
  margin-left: 10px;
  margin-top: 2px;
}

.series-cell .series-cell_tag .el-tag:nth-child(n+2) {
  margin-left: 5px;
  margin-top: 2px;
}
</style>
