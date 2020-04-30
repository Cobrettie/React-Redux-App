import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { getData } from '../actions/index';

class Test extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <div>
        <h2>testing.js component</h2>
        <button onClick={this.props.getData}>Get Data</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('Test component mSTP', state)
  return {
    state
  }
}

export default connect(mapStateToProps, { getData })(Test)