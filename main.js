// main.js (Electron main process)
const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev"); // To check if we're in development or production mode

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 500,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false, // To use node features in React
      enableRemoteModule: true,
    },
  });

  // Load the React app in development or production mode
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000" // If in development mode
      : `file://${path.join(__dirname, "build/index.html")}`, // Production build path
  );

  mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
