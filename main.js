const electron = require('electron'); // electron package
const {app} = electron; // app package within electron
const {BrowserWindow} = electron; // Browser package within electron

let mainWindow = null; // protected against garbage collector

// creates main application window
function createWindow() {
    mainWindow = new BrowserWindow({width: 800, height: 600, resizable: false, title: "CollegePass"}); // sets window size and properties
    mainWindow.loadURL('file://' + __dirname + '/index.html'); // loads main html file
    
//    mainWindow.webContents.openDevTools(); // developer tools
    
    // clears memory when main window is closed
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

// creates main window when all resources have been loaded
app.on('ready', createWindow);

// checks if it's OSX or not and closes app if it's not
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// recreates main window on OSX when clicked in dock
app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
