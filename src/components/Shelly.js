import React from 'react';

class Shelly extends React.Component {
  render() {
    return (
      <textarea rows="15" disabled="true" value={this.props.value}></textarea>
    );
  }
}

export default Shelly;
