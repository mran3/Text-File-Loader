const { app, ipcMain, BrowserWindow } = require('electron')
const fs = require('fs').promises;

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

ipcMain.handle('read-file', async (ipcEvent, path) => {
    if (path != undefined) {
        console.log('Load: ' + path)        
        let loadedText = await fs.readFile(path, 'utf-8')
        return loadedText
    }
})