import React, { Component } from 'react';

class Butty extends React.Component {
  render() {
    return (
      <button onClick={() => this.props.onClick()} disabled={this.props.disabled}>{this.props.buttonText}</button>
    );
  }
}

export default Butty;