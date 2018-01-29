import React from 'react';
import {debounce} from 'throttle-debounce';
import fs from 'fs';

class Propsy extends React.Component {
  constructor() {
    super();
    this.handleChange = debounce(500, this.handleChange);
  }
  printChange(e) {
    this.handleChange(e.target.value);
  }

  handleChange(value) {
    console.info(value);
    fs.writeFile(this.props.file, value, (err) => {
      // throws an error, you could also catch it here
      if (err) throw err;

      // success case, the file was saved
      console.info('Saved!');
    });
  };

  render() {
    return (
      <textarea disabled={this.props.disabled} rows="5" onChange={this.printChange.bind(this)} defaultValue={this.props.default}></textarea>
    );
  }
}

export default Propsy;
