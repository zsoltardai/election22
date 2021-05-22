const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 650,
    maxWidth: 800,
    maxHeight: 650,
    minWidth: 800,
    minHeight: 650,
    frame: false,
    icon: 'img/icon.png',
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
