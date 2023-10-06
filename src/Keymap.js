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
    }
}