<script setup lang="ts">
import { getCardTemp, getCardUndefined} from "../utils/ImgUtils.ts";

const props = defineProps<{
  sn: String,
  name: String,
  kind: String,
  type: String,
  prop: String,
  race: String,
  attr: String,
  step: String,
  atk: String,
  def: String,
  content: String
}>()

</script>

<template>
  <div class="card-cell">
    <div class="card-cell_image">
      <el-image :src="getCardTemp(sn)" :hide-on-click-modal="true" :preview-src-list="[getCardTemp(sn)]">
        <template #error>
          <div class="image-slot">
            <el-image :src="getCardUndefined()" :fit="'fill'"/>
          </div>
        </template>
      </el-image>
    </div>

    <div class="card-cell_title">
      <el-row>
        <el-col :span="18">{{ name }}</el-col>
        <el-col :span="6">{{ sn }}</el-col>
      </el-row>
    </div>

    <div class="card-cell_content">
      <el-row>
        <el-col :span="2">
          <el-tag effect="plain" :size="'small'">种类</el-tag>
        </el-col>
        <el-col :span="2">{{ kind }}</el-col>
        <el-col :span="2">
          <el-tag effect="plain" :size="'small'">类型</el-tag>
        </el-col>
        <el-col :span="kind!='怪兽卡'?14:3">{{ type }}</el-col>

        <el-col v-if="kind==='怪兽卡'" :span="2">
          <el-tag effect="plain" :size="'small'">特性</el-tag>
        </el-col>
        <el-col v-if="kind==='怪兽卡'" :span="9">{{ prop }}</el-col>

        <el-col :span="2">
          <el-tag effect="plain" :size="'small'">罕贵</el-tag>
        </el-col>
        <el-col :span="2" style="text-align: center">-</el-col>
      </el-row>

      <el-row v-if="kind==='怪兽卡'">
        <el-col :span="2">
          <el-tag effect="plain" :size="'small'">种族</el-tag>
        </el-col>
        <el-col :span="6">{{ race }}</el-col>
        <el-col :span="2">
          <el-tag effect="plain" :size="'small'">属性</el-tag>
        </el-col>
        <el-col :span="2">{{ attr }}</el-col>
        <el-col :span="2">
          <el-tag effect="plain" :size="'small'">等级</el-tag>
        </el-col>
        <el-col :span="2">{{ step }}</el-col>
        <el-col :span="2">
          <el-tag effect="plain" :size="'small'">攻击</el-tag>
        </el-col>
        <el-col :span="2">{{ atk }}</el-col>
        <el-col :span="2">
          <el-tag effect="plain" :size="'small'">防御</el-tag>
        </el-col>
        <el-col :span="2">{{ def }}</el-col>
      </el-row>

      <el-row :class="{
        'content3':kind==='怪兽卡',
        'content4':kind!='怪兽卡'
      }">
        <el-col :span="24">
          <el-tag effect="plain" :size="'small'">内容文本</el-tag>
          {{ content }}
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style scoped>
.card-cell {
  height: calc(var(--fd-c-card-cell-height-choose) + 12px);
  border: 1px solid;
  border-color: var(--fd-t-border-color-def);
  border-radius: 5px;
  margin-bottom: 10px;
  color: black;
}

.card-cell:hover {
  border-color: dodgerblue;
  box-shadow: 1px 1px 10px 1px lightskyblue;
}

.card-cell .card-cell_image {
  display: flex;
  float: left;
}

.card-cell .card-cell_image .el-image {
  width: calc(var(--fd-c-card-cell-width-choose));
  height: calc(var(--fd-c-card-cell-height-choose));
  margin: 5px;
}

.card-cell .card-cell_image .el-image .image-slot {
  width: inherit;
  height: inherit;
}

.card-cell .card-cell_image .el-image .image-slot .el-image {
  margin: 0;
}

.card-cell .card-cell_title {
  height: 25px;
  border-bottom: 1px solid;
  border-color: var(--fd-t-border-color-def);
  margin-top: 5px;
  margin-right: 5px;
  margin-left: calc(var(--fd-c-card-cell-width-choose) + 10px);
  padding: 0 5px 0 5px;
  font-weight: bold;

}

.card-cell .card-cell_title .el-row .el-col:last-child {
  font-size: small;
  text-align: right;
  font-weight: normal;
}

.card-cell .card-cell_content {
  height: 130px;
  margin-right: 5px;
  margin-bottom: 5px;
  margin-left: calc(var(--fd-c-card-cell-width-choose) + 10px);
  font-size: x-small;
}

.card-cell .card-cell_content .el-row {
  height: 25px;
  border-bottom: 1px solid;
  border-color: var(--fd-t-border-color-def);
  font-weight: bold;
}

.card-cell .card-cell_content .el-row:last-child {
  border-bottom: none;
  font-weight: normal;

  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

.card-cell .card-cell_content .content3 {
  height: 72px;
  -webkit-line-clamp: 3;
}

.card-cell .card-cell_content .content4 {
  height: 96px;
  -webkit-line-clamp: 4;
}

.card-cell .card-cell_content .el-row .el-tag {
  margin-bottom: 1px;
  font-weight: bold;
}

</style>
