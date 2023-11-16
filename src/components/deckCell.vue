<script setup>
import {getCardTemp, getCardUndefined} from "../utils/ImgUtils.ts";

const props = defineProps({
  sn: String
})

</script>

<template>
  <div class="deck-cell">
    <el-image :src="getCardTemp(sn)">
      <template #error>
        <div class="image-slot">
          <el-image :src="getCardUndefined()"/>
        </div>
      </template>
    </el-image>
  </div>
</template>

<style scoped>
.deck-cell {
  width: calc(var(--fd-c-deck-cell-width-choose) + 10px);
  height: calc(var(--fd-c-deck-cell-height-choose) + 10px);
}

.deck-cell .el-image {
  width: var(--fd-c-deck-cell-width-choose);
  height: var(--fd-c-deck-cell-height-choose);
}

.deck-cell .el-image:hover {
  width: calc(var(--fd-c-deck-cell-width-choose) + 5px);
  height: calc(var(--fd-c-deck-cell-height-choose) + 5px);
  box-shadow: 1px 1px 10px 1px #3778f0;
  cursor: pointer;
}

.deck-cell .el-image .image-slot {
  width: var(--fd-c-deck-cell-width-choose);
  height: var(--fd-c-deck-cell-height-choose);
}

</style>
