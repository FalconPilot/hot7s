"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var utils_1 = require("$game/utils");
// On app closed hook
electron_1.app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
// App ready hook
electron_1.app.whenReady().then(function () {
    var mainWindow = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: true,
        },
    });
    utils_1.loadFrame(__dirname)('editor')(mainWindow);
});
