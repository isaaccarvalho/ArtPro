const { app, BrowserWindow, nativeImage } = require("electron");

require("electron-reload")(__dirname, {
  electron: require(`${__dirname}/node_modules/electron`),
});

function createWindow() {
    const icon = nativeImage.createFromPath(`${app.getAppPath()}/assets/icons/icon_64.png`);
  
    if (app.dock) {
      app.dock.setIcon(icon);
    }

    const win = new BrowserWindow({
      icon,
      width: 800,
      height: 600,
      title: "ArtPro",
      frame: false,
      transparent: true,
      webPreferences: {
        nodeIntegration: true,
      },
    });
  
    win.setMenu(null);
    win.loadFile("index.html");
}
app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})