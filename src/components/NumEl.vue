<script setup>
import { computed } from 'vue';
import { globalStore } from '../GlobalStore';

const props = defineProps({
    showNum: Number
})

const numClass = computed(() => 
    globalStore.numList[globalStore.row][globalStore.col].length == 1 && 
    globalStore.numList[globalStore.row][globalStore.col][0] == props.showNum 
    ? 'highlight' : 'common'
);

</script>

<template>
    <span :class="numClass">
        {{ props.showNum }}
    </span>
</template>

<style scoped>
span {
    user-select: none;
    /* color: white; */
}

.highlight {
    color: white;
}
.common {
    color: rgb(105,105,105);
}
</style>