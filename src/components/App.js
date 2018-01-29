import '../assets/scss/App.scss';
import React, { Component } from 'react';
import Propsy from './Propsy';
import Butty from './Butty';
import Shelly from './Shelly';
import Checky from './Checky';
import Texty from './Texty';
import Staty from './Staty';
import fs from 'fs';
import process from 'child_process';
import os from 'os';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      droidOutput: '',
      backup: true,
      checkDatabase: true,
      version: '',
      disabled: false,
      progressBackup: '',
      progressMigrate: '',
      progressCheck: '',
      liquiFile: '',
      backiFile: ''
    };

    // fs.readFile('liquibase/src/main/resources/liquibase/liquibase.properties', 'UTF-8', (err, data) => {
    //   if (err) {
    //       throw err;
    //   }

    //   this.setState({liquiFile: data});
    // });

    // fs.readFile('liquibase/src/main/resources/backup.properties', 'UTF-8', (err, data) => {
    //   if (err) {
    //       throw err;
    //   }

    //   this.setState({backiFile: data});
    // });
  }

  // doBackup(ops) {

  //   const operatingSystem = os.platform;
  //   let backupScript = (/^win/.test(operatingSystem())) ? 'liquibase\\backup.bat' : './liquibase/backup.sh'
  //     , logFile = (/^win/.test(operatingSystem())) ? 'liquibase\\migration.log' : 'liquibase/migration.log'
  //     , backup;

  //   fs.stat(logFile, function (err) {

  //     if (!err) {
  //       fs.unlinkSync(logFile);
  //     }
  //   });
  //   this.setState({droidOutput: ''});
  //   this.setState({disabled: true});
  //   this.setState({progressBackup: 'loading'});
  //   this.setState({progressMigrate: ''});
  //   this.setState({progressCheck: ''});
  //   backup = process.spawn(backupScript, []);

  //   backup.stdout.on('data', data => {

  //     this.setState({droidOutput: this.state.droidOutput += data});
  //   });

  //   backup.stderr.on('data', function (data) {
  //     console.log('stderr: ' + data);
  //   });

  //   backup.on('close', code => {
  //     console.log('backup process exited with code ' + code);

  //     if (code === 0) {

  //       this.setState({progressBackup: 'ok'});
  //       this.doMigrate(ops);
  //     } else {

  //       this.setState({progressBackup: 'ko'});
  //       this.setState({disabled: false});
  //     }
  //   });
  // };

  // doMigrate(ops) {

  //   const operatingSystem = os.platform;
  //   let migrateScript = (/^win/.test(operatingSystem())) ? 'liquibase\\migrate.bat' : './liquibase/migrate.sh'
  //     , logFile = (/^win/.test(operatingSystem())) ? 'liquibase\\migration.log' : 'liquibase/migration.log'
  //     , migrate;

  //   this.setState({disabled: true});
  //   this.setState({progressCheck: ''});
  //   this.setState({progressMigrate: 'loading'});

  //   if (!this.state.backup) {
  //     fs.stat(logFile, function (err) {
  //       if (!err) {
  //         fs.unlinkSync(logFile);
  //       }
  //     });
  //     this.setState({droidOutput: ''});
  //     this.setState({progressBackup: ''});
  //   }

  //   if (ops === 'update') {

  //     migrate = process.spawn(migrateScript,  [ops]);
  //   } else {

  //     migrate = process.spawn(migrateScript,  [ops, this.state.version]);
  //   }

  //   migrate.stdout.on('data', data => {

  //     this.setState({droidOutput: this.state.droidOutput += data});
  //   });

  //   migrate.stderr.on('data', function (data) {
  //     console.log('stderr: ' + data);
  //   });

  //   migrate.on('close', code => {
  //     console.log('migrate process exited with code ' + code);

  //     if (code == 0) {

  //       this.setState({progressMigrate: 'ok'});
  //       if (this.state.checkDatabase) {

  //         this.doCheck(ops);
  //       } else {

  //         this.setState({disabled: false});
  //       }
  //     } else {

  //       this.setState({progressMigrate: 'ko'});
  //       this.setState({disabled: false});
  //     }
  //   });
  // };

  // doCheck(ops) {

  //   const operatingSystem = os.platform;
  //   let checkScript = (/^win/.test(operatingSystem())) ? 'liquibase\\backup.bat' : './liquibase/backup.sh'
  //     , check;

  //   this.setState({progressCheck: 'loading'});
  //   check = process.spawn(checkScript, []);

  //   check.stdout.on('data', data => {

  //     this.setState({droidOutput: this.state.droidOutput += data});
  //   });

  //   check.stderr.on('data', function (data) {
  //     console.log('stderr: ' + data);
  //   });

  //   check.on('close', code => {
  //     console.log('check process exited with code ' + code);

  //     if (code === 0) {

  //       this.setState({progressCheck: 'ok'});
  //     } else {

  //       this.setState({progressCheck: 'ko'});
  //     }

  //     this.setState({disabled: false});
  //   });
  // };

  // handleChangeText(event) {
  //   this.setState({version: event.target.value});
  // }

  // toggleCheckDatabase() {
  //   this.setState({
  //     checkDatabase: !this.state.checkDatabase
  //   });
  // }

  // toggleBackup() {
  //   this.setState({
  //     backup: !this.state.backup
  //   });
  // }

  render() {
    return (
      <div>
        Ciao
      </div>
    );
  }
}

export default App;
