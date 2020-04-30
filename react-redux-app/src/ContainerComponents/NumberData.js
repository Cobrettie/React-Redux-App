import React from 'react';

import { getData } from '../actions/index';

class NumberData extends React.Component {
  componentDidMount() {
    this.props.getData()
  }

  render() {
    return (
      <div>
        <h2>NumberData Component</h2>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('NumberData mSTP', state)
  return {
    state
  }
}

export default connect( mapStateToProps, { getData })(NumberData)