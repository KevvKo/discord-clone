const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
    const browerWindow = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    browserWindow.loadFile('index.html')
}

app.whenReady()
.then(() => {
    createWindow()

    app.on('active', () => {
        if (BrowserWindow.getAllWindows().length === 0){
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit()
    }
})