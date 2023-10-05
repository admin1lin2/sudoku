import { reactive } from "vue";

export const globalStore = reactive({
    row: 0,
    col: 0,
    numList: [...Array(9)].map((args) => [...Array(9)].map((arg)=>[1]))
})