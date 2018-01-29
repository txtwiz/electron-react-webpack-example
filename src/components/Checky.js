import React, { Component } from 'react';

class Checky extends React.Component {
  render() {
    return (
      <div>
        <input type="checkbox" disabled={this.props.disabled} defaultChecked={this.props.checked} onChange={this.props.onChange}/> <label>{this.props.label}</label>
      </div>
    );
  }
}

export default Checky;