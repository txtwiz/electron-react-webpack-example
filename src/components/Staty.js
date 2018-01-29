import React, { Component } from 'react';

class Staty extends React.Component {
  render() {
    return (
      <div className="staty">
        {this.props.stateName}
        <div className="spinner">
          <div className={`rect1 ${this.props.status}`}></div>
          <div className={`rect2 ${this.props.status}`}></div>
          <div className={`rect3 ${this.props.status}`}></div>
          <div className={`rect4 ${this.props.status}`}></div>
          <div className={`rect5 ${this.props.status}`}></div>
        </div>
      </div>
    );
  }
}

export default Staty;