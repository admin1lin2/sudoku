<script setup>
import { computed } from 'vue';
import { globalStore } from '../GlobalStore';

const props = defineProps({
    showNum: Number
})

const numClass = computed(() => 
    typeof globalStore.numList[globalStore.row][globalStore.col] === 'number' && 
    globalStore.numList[globalStore.row][globalStore.col] == props.showNum 
    ? 'highlight' : 'common'
);

</script>

<template>
    <span v-if="showNum != 0" :class="numClass">
        {{ props.showNum }}
    </span>
    <span v-else></span>
</template>

<style scoped>
span {
    user-select: none;
    /* color: white; */
    font-size: calc(var(--base-size)/4);
}

.highlight {
    color: white;
}
.common {
    color: rgb(105,105,105);
}
</style>