/* global require,process,__dirname,console */
(function withElectron() {
  'use strict';

  // Import parts of electron to use
  const {app, BrowserWindow, ipcMain} = require('electron')
    , path = require('path')
    , url = require('url')
    , ps = require('ps-node')
    , pids = [];

  // Keep a global reference of the window object, if you don't, the window will
  // be closed automatically when the JavaScript object is garbage collected.
  let mainWindow
    , dev = false;

  if (process.defaultApp ||
      (/[\\/]electron-prebuilt[\\/]/).test(process.execPath) ||
      (/[\\/]electron[\\/]/).test(process.execPath)) {
    dev = true;
  }
  /*eslint-disable one-var*/
  const createWindow = () => {
    let indexPath;

    // Create the browser window.
    mainWindow = new BrowserWindow({
      'width': 800,
      'height': 600,
      'minWidth': 800,
      'minHeight': 600,
      'icon': `${__dirname}src/assets/icons/png/128x128.png`,
      'show': false
    });

    // and load the index.html of the app.
    if (dev &&
        process.argv.indexOf('--noDevServer') === -1) {
      indexPath = url.format({
        'protocol': 'http:',
        'host': 'localhost:8080',
        'pathname': 'index.html',
        'slashes': true
      });
    } else {
      indexPath = url.format({
        'protocol': 'file:',
        'pathname': path.join(__dirname, 'dist', 'index.html'),
        'slashes': true
      });
    }

    mainWindow.loadURL(indexPath);

    // Don't show until we are ready and loaded
    mainWindow.once('ready-to-show', () => {
      mainWindow.show();
      // Open the DevTools automatically if developing
      if (dev) {
        mainWindow.webContents.openDevTools();
      }
    });

    // Emitted when the window is closed.
    mainWindow.on('closed', () => {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      mainWindow = null;
    });
  };

  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on('ready', createWindow);

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  ipcMain.on('pid-message', (event, arg) => {
    /*eslint-disable no-console*/
    console.info('Main:', arg);
    /*eslint-enable no-console*/
    pids.push(arg);
  });

  app.on('before-quit', () => {
    pids.forEach(pid => {
      // A simple pid lookup
      ps.kill(pid, err => {
        if (err) {
          throw new Error(err);
        } else {
          /*eslint-disable no-console*/
          console.info(`Process ${pid} has been killed!`);
          /*eslint-enable no-console*/
        }
      });
    });
  });

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
      createWindow();
    }
  });
}());
