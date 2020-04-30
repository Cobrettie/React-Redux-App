import React from 'react';
import { connect } from 'react-redux';

import { getData } from '../actions/index';

class NumberData extends React.Component {
  constructor(props) {
    super(props)
    console.log('NumberData props', props)
  }

  componentDidMount() {
    this.props.getData()
  }

  render() {
    return (
      <div>
        <h2>Random Number Facts Using Numbers API</h2>
        <button onClick={this.props.getData}>Get Random Number Fact</button>
        <div>
          {this.props.isFetching 
            ? <h2>Loading...</h2> 
            : this.props.testArray.map(item => {
              return item.isFetching ? <h2>Loading...</h2> : <p key={item}>{item}</p>
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('NumberData mSTP', state)
  return {
    testArray: state.testArray,
    isFetching: state.isFetching
  }
}

export default connect( mapStateToProps, { getData })(NumberData)