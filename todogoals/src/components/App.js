import React from 'react';
import {handleInitialData} from '../Actions/shared'
import {connect} from 'react-redux'
import ConnectedTODO from './Todos'
import ConnectedGoals from './Goals'

class App extends React.Component {
  componentDidMount() {
      const { dispatch } = this.props
      dispatch(handleInitialData())


  }

  render() {

      if (this.props.loading === true) {
          return <h3>Loading....</h3>
      }
      return (
          <div>
              <ConnectedTODO />
              <ConnectedGoals />
          </div>
      )
  }
}

export default connect((state)=>({
  loading:state.loading
}))(App)
