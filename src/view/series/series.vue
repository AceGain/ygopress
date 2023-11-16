<script setup lang="ts">
import {ref, computed, reactive, getCurrentInstance} from 'vue'
import {getSvg} from "../../utils/ImgUtils.ts";

import seriesTab from '../../components/seriesTab.vue'
import cardCell from '../../components/cardCell.vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import {useData, useRouter} from 'vitepress'

const language = ref(zhCn)

const {params} = useData()
const series = ref(params.value.series)

const pagination = reactive<{ current: number, size: number }>({
  current: 1,
  size: 20
})

const total = ref(series.value.data.length)

const pageData = computed(() => {
  let idxStart: number = (pagination.current - 1) * pagination.size
  let idxEnd: number = idxStart + pagination.size
  if (idxEnd > total.value)
    return series.value.data.slice(idxStart)
  else
    return series.value.data.slice(idxStart, idxEnd)
})

const {proxy} = getCurrentInstance()
const currentChange = (val) => {
  console.log('当前页发生变化' + val)
  pagination.current = val
  // window.scrollTo(0, 100);

  // const element = proxy.$refs[series.value.sid].focus()
  const element = proxy.$refs['cards'].focus()
}

const sizeChange = (val) => {
  console.log('显示行数发生变化' + val)
  pagination.size = val
}

</script>

<template>
  <div id="page-series_series">
    <series-tab :sid="series.sid" :content="series.content" :tags="series.tags"/>

    <el-divider>
      <h2 style="border: none;padding: 0;margin: 0;font-size: 18px;" ref="cards" id="卡牌" tabindex="-1">
        <el-image :src="getSvg('cards')"/>
        卡牌
        <a href="#卡牌" aria-label="Permalink to &quot;卡牌&quot;"></a>
      </h2>
    </el-divider>

    <card-cell v-for="item in pageData" v-bind="item"/>

    <el-config-provider :locale="language">
      <el-pagination
          small background
          layout="total, sizes, ->, prev,pager, next, jumper"
          :current-page="pagination.current" @currentChange="currentChange"
          :page-sizes="[10,20,50]"
          :page-size="pagination.size" @sizeChange="sizeChange"
          :total="total"/>
    </el-config-provider>

  </div>
</template>

<style scoped>
#page-series_series {
  min-width: 688px;
}

#page-series_series .el-divider {
  border: 1px solid mediumblue;
  margin-top: 65px;
}

#page-series_series .el-divider .el-image {
  width: 30px;
}
</style>
