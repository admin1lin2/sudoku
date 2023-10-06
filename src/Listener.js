import { globalStore } from'./GlobalStore'
import { keymap } from './keymap'

function onKeyDown(event) {
    // console.log(event)
    let keycode = event.key
    for (let key in keymap) {
        if (key == keycode) {
            keymap[key]()
        }
    }
}

export const listenerList = {
    keydown : onKeyDown
}