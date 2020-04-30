import React from 'react';
import { connect } from 'react-redux';

import { getData } from '../actions/index';

class NumberData extends React.Component {
  componentDidMount() {
    this.props.getData()
  }

  render() {
    return (
      <div>
        <h2>NumberData Component</h2>
        {this.props.isFetching ? <h2>Loading...</h2> : this.props.testArray}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('NumberData mSTP', state)
  return {
    testArray: state.testArray
  }
}

export default connect( mapStateToProps, { getData })(NumberData)