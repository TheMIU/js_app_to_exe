// renderer.js
const { ipcRenderer } = require('electron');

document.getElementById('btnCalculate').addEventListener('click', () => {
    const number = parseInt(document.getElementById('inputNumber').value);
    ipcRenderer.send('calculate', number);
});

ipcRenderer.on('result', (event, result) => {
    document.getElementById('result').textContent = result;
});
