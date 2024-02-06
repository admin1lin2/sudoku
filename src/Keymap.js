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
    '1' : () => {
        let now = globalStore.numList[globalStore.row][globalStore.col]
        if (globalStore.mode) {
            globalStore.numList[globalStore.row][globalStore.col] = [1]
        } else {
            if (!now.includes(1)) { globalStore.numList[globalStore.row][globalStore.col].push(1) }
            else { globalStore.numList[globalStore.row][globalStore.col] = now.filter((n)=>n != 1)}
        }
    },
    '2' : () => {
        let now = globalStore.numList[globalStore.row][globalStore.col]
        if (globalStore.mode) {
            globalStore.numList[globalStore.row][globalStore.col] = [2]
        } else {
            if (!now.includes(2)) { globalStore.numList[globalStore.row][globalStore.col].push(2) }
            else { globalStore.numList[globalStore.row][globalStore.col] = now.filter((n)=>n != 2)}
        }
    },
    '3' : () => {
        let now = globalStore.numList[globalStore.row][globalStore.col]
        if (globalStore.mode) {
            globalStore.numList[globalStore.row][globalStore.col] = [3]
        } else {
            if (!now.includes(3)) { globalStore.numList[globalStore.row][globalStore.col].push(3) }
            else { globalStore.numList[globalStore.row][globalStore.col] = now.filter((n)=>n != 3)}
        }
    },
    '4' : () => {
        let now = globalStore.numList[globalStore.row][globalStore.col]
        if (globalStore.mode) {
            globalStore.numList[globalStore.row][globalStore.col] = [4]
        } else {
            if (!now.includes(4)) { globalStore.numList[globalStore.row][globalStore.col].push(4) }
            else { globalStore.numList[globalStore.row][globalStore.col] = now.filter((n)=>n != 4)}
        }
    },
    '5' : () => {
        let now = globalStore.numList[globalStore.row][globalStore.col]
        if (globalStore.mode) {
            globalStore.numList[globalStore.row][globalStore.col] = [5]
        } else {
            if (!now.includes(5)) { globalStore.numList[globalStore.row][globalStore.col].push(5) }
            else { globalStore.numList[globalStore.row][globalStore.col] = now.filter((n)=>n != 5)}
        }
    },
    '6' : () => {
        let now = globalStore.numList[globalStore.row][globalStore.col]
        if (globalStore.mode) {
            globalStore.numList[globalStore.row][globalStore.col] = [6]
        } else {
            if (!now.includes(6)) { globalStore.numList[globalStore.row][globalStore.col].push(6) }
            else { globalStore.numList[globalStore.row][globalStore.col] = now.filter((n)=>n != 6)}
        }
    },
    '7' : () => {
        let now = globalStore.numList[globalStore.row][globalStore.col]
        if (globalStore.mode) {
            globalStore.numList[globalStore.row][globalStore.col] = [7]
        } else {
            if (!now.includes(7)) { globalStore.numList[globalStore.row][globalStore.col].push(7) }
            else { globalStore.numList[globalStore.row][globalStore.col] = now.filter((n)=>n != 7)}
        }
    },
    '8' : () => {
        let now = globalStore.numList[globalStore.row][globalStore.col]
        if (globalStore.mode) {
            globalStore.numList[globalStore.row][globalStore.col] = [8]
        } else {
            if (!now.includes(8)) { globalStore.numList[globalStore.row][globalStore.col].push(8) }
            else { globalStore.numList[globalStore.row][globalStore.col] = now.filter((n)=>n != 8)}
        }
    },
    '9' : () => {
        let now = globalStore.numList[globalStore.row][globalStore.col]
        if (globalStore.mode) {
            globalStore.numList[globalStore.row][globalStore.col] = [9]
        } else {
            if (!now.includes(9)) { globalStore.numList[globalStore.row][globalStore.col].push(9) }
            else { globalStore.numList[globalStore.row][globalStore.col] = now.filter((n)=>n != 9)}
        }
    },
}