const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  runPythonScript: () => ipcRenderer.send('runPython'),
  onGotNewText: (callback) => ipcRenderer.on('gotText', (_event, value) => callback(value))
})