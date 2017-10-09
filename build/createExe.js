/**
 * Created by Administrator on 2017/10/9 0009.
 */
const electron = require('electron');
const path = require('path');
const url = require('url');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

var win;

function createWindow() {
	win = new BrowserWindow({width: '100%', height: '100%'});

	win.loadURL(url.format({
		pathname: path.join(__dirname, '../frontend/src/html/login.html'),
		protocol: 'file:',
		slashes: true
	}));

	// win.webContents.openDevTools();

	win.on('closed', function () {
		win = null;
	});
}

app.on('ready', createWindow);

app.on('window-all-closed', function() {
		if (process.platform !== 'darwin') {
		app.quit()
	}
});

app.on('activate', function() {
		if (win === null) {
		createWindow()
	}
});