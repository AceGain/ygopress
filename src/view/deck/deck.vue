<script setup>
import deckGrid from '../../components/deckGrid.vue'
import deckJson from '../../data/deck/deck'

import {useData} from 'vitepress';

const {params} = useData();
const deck = deckJson[params.value.deck];
</script>

<template>
  <div id="page-deck_deck">
    <deck-grid :type="0" :deck="deck.main"/>
    <deck-grid :type="1" :deck="deck.extra"/>
    <deck-grid :type="2" :deck="deck.side"/>
  </div>
</template>

<style scoped>
#page-deck_deck {
}
</style>
