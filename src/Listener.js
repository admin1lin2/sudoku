import { globalStore } from'./GlobalStore'

function onKeyDown(event) {
    let keycode = event.key
    switch (keycode) {
        case 'w':
            if (globalStore.row > 0) --globalStore.row;
            break;
        case 'a':
            if (globalStore.col > 0) --globalStore.col
            break;
        case 's':
            if (globalStore.row < 8) ++globalStore.row
            break;
        case 'd':
            if (globalStore.col < 8) ++globalStore.col
            break;
    }
}

export const listenerList = {
    keydown : onKeyDown
}