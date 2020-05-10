import React, { Component ,Fragment} from 'react'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import NewTweet from './newTweet'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import NavBar from './Nav'
import TweetPage from './tweetPage'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }


  render() {
    return (
      <Router>
      <Fragment>
      <LoadingBar />
      <div className='container'>
        <NavBar />
        {this.props.loading===true?null
        : <div>
          <Route path='/' exact component={Dashboard} />
          <Route exact path='/tweet/:id' component={TweetPage} />
          <Route path='/new' exact component={NewTweet} />
          </div>
        }
      </div>
      </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ authUser }){
  return{
    loading : authUser === null
  }
}

export default connect(mapStateToProps)(App)