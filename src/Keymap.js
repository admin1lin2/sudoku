import { globalStore } from "./GlobalStore"

function toInt(x) {
    return Math.floor(x)
}

function getGroup(r, c) {
    return 3 * toInt(r / 3) + toInt(c / 3)
}

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
            if (!(globalStore.lockList.has(globalStore.row*10+globalStore.col))) {
                let cp = globalStore.numList
                let nowGroup = getGroup(globalStore.row, globalStore.col)
                let flag = true;
                for (let r = 0; r < 9; ++r) {
                    for (let c = 0; c < 9; ++c) {
                        if (r == globalStore.row || c == globalStore.col || getGroup(r, c) == nowGroup) {
                            if (typeof cp[r][c] == 'number') {
                                if (cp[r][c] == num) {
                                    flag = false;
                                    break;
                                }
                            } else if (globalStore.numList[r][c].has(num)) {
                                globalStore.numList[r][c].delete(num)
                            }
                        }
                    }
                }
                if (flag) {
                    globalStore.numList[globalStore.row][globalStore.col] = num
                }
            }
        } else if (typeof now != 'number') {
            if (now.has(num)) globalStore.numList[globalStore.row][globalStore.col].delete(num)
            else globalStore.numList[globalStore.row][globalStore.col].add(num)
        } else if (now === 0) {
            globalStore.numList[globalStore.row][globalStore.col] = new Set([num])
        }
    },
    '0' : () => {
        globalStore.numList[globalStore.row][globalStore.col] = 0
    },
    'l' : () => {
        if (globalStore.lockList.has(globalStore.row*10+globalStore.col)) {
            globalStore.lockList.delete(globalStore.row*10+globalStore.col)
        } else {
            if (typeof globalStore.numList[globalStore.row][globalStore.col] == 'number')
                globalStore.lockList.add(globalStore.row*10+globalStore.col)
        }
    },
    'm' : () => { globalStore.mode = !globalStore.mode }
}