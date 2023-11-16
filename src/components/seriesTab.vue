<script setup lang="ts">
import {getSeries} from "../utils/ImgUtils.ts";

const props = defineProps({
  sid: String,
  content: String,
  tags: {
    type: Array,
    default: ['?', '?', '?', '?', '?', '?']
  }
})
</script>

<template>
  <div class="series-tab">

    <div class="series-tab_container">
      <div class="series-tab_content">
        {{ content }}
      </div>

      <div class="series-tab_tag">
        <el-tag v-if="tags[0]" effect="dark">力量{{ tags[0] }}</el-tag>
        <el-tag v-if="tags[1]" effect="dark">技巧{{ tags[1] }}</el-tag>
        <el-tag v-if="tags[2]" effect="dark">维持{{ tags[2] }}</el-tag>
        <el-tag v-if="tags[3]" effect="dark">展开{{ tags[3] }}</el-tag>
        <el-tag v-if="tags[4]" effect="dark">阻断{{ tags[4] }}</el-tag>
        <el-tag v-if="tags[5]===0" effect="dark">先手</el-tag>
        <el-tag v-if="tags[5]===1" effect="dark">后手</el-tag>
      </div>
    </div>

    <div class="series-tab_image">
      <el-image :src="getSeries(sid)" style="width: 150px">
        <template #error>
          <div class="image-slot">
            <PictureFilled/>
          </div>
        </template>
      </el-image>
    </div>
  </div>

</template>

<style scoped>
.series-tab {
  height: 150px;
  display: flex;
}

.series-tab .series-tab_container {
  width: calc(100% - 150px);
  height: inherit;
  padding-right: 5px;
}

.series-tab .series-tab_container .series-tab_content {
  height: 112px;
  margin-top: 2px;
  border-top: 2px dashed dodgerblue;
  padding-left: 5px;
  font-size: small;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
}

.series-tab .series-tab_container .series-tab_tag {
  height: 34px;
  border-bottom: 1px solid;
  border-color: var(--fd-t-border-color-def);
  padding-left: 5px;
  background-color: whitesmoke;
}

.series-tab .series-tab_container .series-tab_tag .el-tag {
  margin-top: 5px;
  margin-right: 5px;

  background-color: royalblue;
  border-color: royalblue;
}

.series-tab .series-tab_image {
  width: 150px;
  height: 150px;
}

.series-tab .series-tab_image .el-image {
  border-radius: 8px;
}
</style>
