import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

const API = 'http://numbersapi.com/number/random'

function Test() {

  axios
    .get('http://numbersapi.com/random')
    .then(response => {
      console.log('Test get request', response)
    })

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