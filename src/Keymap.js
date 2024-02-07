import { globalStore } from "./GlobalStore"

export const keymap = {
    'a' : () => {
        if (globalStore.col > 0) --globalStore.col
    },
    'd' : () => {
        if (globalStore.col < 8) ++globalStore.col
    },
    'w' : () => {
        if (globalStore.row > 0) --globalStore.row
    },
    's' : () => {
        if (globalStore.row < 8) ++globalStore.row
    },
    'ArrowLeft' : () => {
        if (globalStore.col > 0) --globalStore.col
    },
    'ArrowRight' : () => {
        if (globalStore.col < 8) ++globalStore.col
    },
    'ArrowUp' : () => {
        if (globalStore.row > 0) --globalStore.row
    },
    'ArrowDown' : () => {
        if (globalStore.row < 8) ++globalStore.row
    },
    '1-9' : (num) => {
        let now = globalStore.numList[globalStore.row][globalStore.col]
        if (globalStore.mode) {
            globalStore.numList[globalStore.row][globalStore.col] = num
        } else if (typeof now != 'number') {
            if (now.includes(num)) globalStore.numList[globalStore.row][globalStore.col] = now.filter((n)=>n != num)
            else globalStore.numList[globalStore.row][globalStore.col].push(num)
        } else if (now === 0) {
            globalStore.numList[globalStore.row][globalStore.col] = [num]
        }
    },
    '0' : () => {
        globalStore.numList[globalStore.row][globalStore.col] = 0
    }
}