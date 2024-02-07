import { globalStore } from'./GlobalStore'
import { keymap } from './Keymap'

function onKeyDown(event) {
    // console.log(event)
    let keycode = event.key
    if (keycode.length == 1) {
        if ('1' <= keycode && keycode <= '9') {
            keymap['1-9'](parseInt(keycode))
        } else if (keycode == '0') {
            keymap['0']()
        }
    }
    if (keycode == 'Delete') {
        keymap['0']()
    }
    else for (let key in keymap) {
        if (key == keycode) {
            keymap[key]()
            break
        }
    }
}

export const listenerList = {
    keydown : onKeyDown
}