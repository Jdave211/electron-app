const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  runPythonScript: () => ipcRenderer.send('runPython'),
  killChild: () => ipcRenderer.send('killChild'),
  onGotNewText: (callback) => ipcRenderer.on('gotText', (_event, value) => callback(value))
})