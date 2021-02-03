import { GameWindow } from "front/types"

declare var window: GameWindow

window.ipcRenderer = require('electron').ipcRenderer
