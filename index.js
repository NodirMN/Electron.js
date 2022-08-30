const { app, BrowserWindow } = require("electron");
const path = require("path");

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1024,
        height: 868,
        
    });

    win.loadURL("https://nodirmn.github.io/ResumeNodirbek/");
};

app.whenReady().then(() => {
    createWindow();
});


app.on("window-all-closed", () => {
    if (process.platform !== "darwin") 
    app.quit();
});


app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) 
        createWindow();
});