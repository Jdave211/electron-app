// main.js (Electron main process)
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const { spawn, exec } = require('child_process');

let mainWindow;
let child;

const gotNewText = (text) => {
  mainWindow.webContents.send('gotText', text);
}

function runPythonScript() {
  child = spawn("C:\\Users\\Mateusz\\Documents\\Python\\.venv\\Scripts\\python.exe", ["C:\\Users\\Mateusz\\Documents\\Python\\mock_captions.py"]);
  child.stdout.on('data', (data) => {
    gotNewText(data.toString('utf-8'));
  });
}

function killChild() {
  if (child)
    child.kill();
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 500,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      enableRemoteModule: true,
      preload: path.join(__dirname, 'preload.js')
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

app.on('ready', () => {
  ipcMain.on('runPython', runPythonScript);
  ipcMain.on('killChild', killChild);
  createWindow();
});

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
