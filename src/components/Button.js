import React from 'react';
import { connect } from 'react-redux';
import { getInfo } from '../actions';

class Button extends React.Component {
  render() {
    return (
      <button onClick={ this.props.getInfo }>+</button>
    );
  }
}

const mapStateToProps = state => {
    return {
      'info': state.infoReducer.data
    };
  }
  , mapDispatchToProps = dispatch => {
    return {
      'getInfo': () => {
        dispatch(getInfo());
      }
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Button);
