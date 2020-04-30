import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

function Test() {
  return (
    <div>
      <h2>testing.js component</h2>
    </div>
  )
}

const mapStateToProps = state => {
  console.log('Test component mSTP', state)
  return {
    state
  }
}

export default connect(mapStateToProps, {})(Test)