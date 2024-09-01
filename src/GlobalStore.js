import { reactive } from "vue";

export const globalStore = reactive({
    row: 0,
    col: 0,
    numList: [...Array(9)].map((args) => [...Array(9)].map((arg)=>0)),
    mode: true, // is edit mode, false is draft mode
    lockList: new Set(),
})