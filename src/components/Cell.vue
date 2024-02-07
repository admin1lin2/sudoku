<script setup>
import { defineProps, computed } from 'vue';
import { globalStore } from '../GlobalStore';
import NumEl from './NumEl.vue';

function toInt(args) {
    return Math.floor(args)
}

const props = defineProps({
    showList: Array | Number,
    group: Number,
    offset: Number
})

const cellClass = computed(() => 
    typeof props.showList === 'number' ? 'single' : 'multi'
)

const row = computed(
    () =>
    toInt(props.group / 3) * 3 + toInt(props.offset / 3)
)

const col = computed(
    () =>
    props.group % 3 * 3 + props.offset % 3
)

const cellHighLight = computed(
    () =>
    row.value == globalStore.row || 
    col.value == globalStore.col || 
    props.group == toInt(globalStore.row / 3) * 3 + toInt(globalStore.col / 3)
    ? (row.value == globalStore.row && col.value == globalStore.col ? '' : 'black') : ''
)


function onChoose() {
    globalStore.row = row.value
    globalStore.col = col.value
}

// console.log(`${row.value} ${col.value}`)

</script>

<template>
    <div :class="cellClass" :style="{ backgroundColor: cellHighLight }" @click="onChoose">
        <span v-if="(typeof showList) === 'number'" class="single">
            <NumEl :showNum="showList"></NumEl>
        </span>
        <span v-else class="multi" v-for="i in [...Array(9).keys()]">
            <NumEl v-if="showList.includes(i+1)" :showNum="i+1"></NumEl>
            <NumEl v-else :showNum="0"></NumEl>
        </span>
    </div>
</template>

<style scoped>
div {
    border: 1px solid #606060;
}

.single {
    display: flex;
    justify-content: center;
    align-items: center;
    /* justify-content: center;
    align-items: center; */
    /* background-color: red;
    border: 1px solid red; */
}
.multi {
    display: grid;
    grid-template-rows: repeat(3, calc(var(--base-size)/3));
    grid-template-columns: repeat(3, calc(var(--base-size)/3));
    /* background-color: green;
    border: 1px solid green; */
}
</style>