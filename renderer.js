const { ipcRenderer } = require('electron');

async function fileSelected(e){    
    const loadedFilePath = e.target.files[0]?.path
    let data = await ipcRenderer.invoke('read-file', loadedFilePath)
    document.getElementById("loadedText").value = data
}
document.getElementById("fileLoader").addEventListener("change", fileSelected);
