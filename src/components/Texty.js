import React, { Component } from 'react';

class Texty extends React.Component {
  render() {
    return (
      <input type="text" placeholder={this.props.placeholder} defaultValue={this.props.value} disabled={this.props.disabled} onBlur={this.props.onBlur} /> 
    );
  }
}

export default Texty;