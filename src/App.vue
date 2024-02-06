<script setup>
import Cell from './components/Cell.vue';
import { globalStore } from './GlobalStore';
// globalStore.numList[4][4] = [1]; // this is for test
</script>

<template>
  <div class="container">
    <div class="group" v-for="i in [...Array(9).keys()]">
      <Cell v-for="j in [...Array(9).keys()]" :group="i" :offset="j" :show-list="globalStore.numList[i][j]" />
    </div>
  </div>
</template>

<style scoped>

.container {
  /* background-color: red; */
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(3, calc(3 * var(--base-size)));
  grid-template-rows: repeat(3, calc(3 * var(--base-size)));
  column-gap: 10px;
  row-gap: 10px;
}

.group {
  border: 1px solid #606060;
  display: grid;
  grid-template-rows: repeat(3, var(--base-size));
  grid-template-columns: repeat(3, var(--base-size));
}

</style>