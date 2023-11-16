<script setup>
import {ref, computed} from 'vue'
import {getCardTemp, getCardUndefined} from "../utils/ImgUtils.ts";

import deckCell from './deckCell.vue'

const props = defineProps({
  type: Number,
  deck: Array
})

let image = ref();
const drawerFlag = ref(false);

function openDrawer(sn) {
  drawerFlag.value = true;
  image = getCardTemp(sn);
}
</script>

<template>
  <div class="deck-grid">
    <div v-if="type===0" class="deck-grid_title">
      <el-icon size="20">
        <CollectionTag/>
      </el-icon>
      主牌组：{{ deck.length }}
    </div>
    <div v-if="type===0" class="deck-grid_content">
      <el-space v-if="deck" :size="0" wrap>
        <deck-cell v-for="sn in deck" :sn="sn" @click="openDrawer(sn)"/>
      </el-space>
    </div>

    <div v-if="type===1" class="deck-grid_title">
      <el-icon size="20">
        <CollectionTag/>
      </el-icon>
      额外牌组：{{ deck.length }}
    </div>
    <div v-if="type===1" class="deck-grid_content">
      <el-space v-if="deck" :size="0" wrap>
        <deck-cell v-for="sn in deck" :sn="sn" @click="openDrawer(sn)"/>
      </el-space>
    </div>

    <div v-if="type===2" class="deck-grid_title">
      <el-icon size="20">
        <CollectionTag/>
      </el-icon>
      补充牌组：{{ deck.length }}
    </div>
    <div v-if="type===2" class="deck-grid_content">
      <el-space :size="0" wrap>
        <deck-cell v-for="sn in deck" :sn="sn" @click="openDrawer(sn)"/>
      </el-space>
    </div>

    <el-empty v-if="!deck.length" :image-size="50" description="无内容"/>

  </div>

  <el-drawer v-model="drawerFlag" :lock-scroll="false" direction="ltr" size="30%">
    <el-image :src="image">
      <template #error>
        <div class="image-slot">
          <el-image :src="getCardUndefined()"/>
        </div>
      </template>
    </el-image>
  </el-drawer>
</template>

<style scoped>
.deck-grid {
  margin: 0 0 15px 0;
  border: 1px solid;
  border-color: var(--fd-t-border-color-def);
}

.deck-grid:hover {
  border-color: var(--fd-t-border-color-hover-def);
}

.deck-grid .deck-grid_title {
  margin: 10px;
  padding-bottom: 5px;
  font-size: larger;
  font-weight: bold;
  border-bottom: 1px solid;
  border-color: var(--fd-t-border-color-def);
}

.deck-grid .deck-grid_title .el-icon {
  display: inline-block;
  padding: 4px 0 0 3px;
}

.deck-grid .deck-grid_content {
  margin: 10px 0 10px 23px;
}

.deck-grid .el-empty {
  padding: 0;
  margin-right: 23px;
}

.deck-grid .el-empty :deep(.el-empty__description) {
  margin: 5px 0 15px 0;
}
</style>
