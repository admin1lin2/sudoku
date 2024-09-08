import { app, BrowserWindow } from 'electron';

console.log('Hello from Electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })
    win.webContents.openDevTools()
    console.log('loaded!')
    win.loadFile('./dist/index.html')
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})