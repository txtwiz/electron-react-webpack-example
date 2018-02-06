import React from 'react';
import { connect } from 'react-redux';

class Info extends React.Component {

  render() {
    return (
      <div className="info">
        <span>{ this.props.data }</span>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    'data': state.infoReducer.data
  };
};

export default connect(mapStateToProps)(Info);
