// main.js (Electron main process)
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 500,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000' 
      : `file://${path.join(__dirname, 'build/index.html')}`
  );

  mainWindow.on('closed', () => (mainWindow = null));

  // Listen for the resize-window event from the renderer process
  ipcMain.on('resize-window', (event, size) => {
    const { width, height } = size;
    mainWindow.setSize(width, height);
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
