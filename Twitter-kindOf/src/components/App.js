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
          <Route path='/tweet/hbsc73kzqi75rg7v1e0i6a' exact render={()=>{
            <TweetPage id={'hbsc73kzqi75rg7v1e0i6a'} />}} />
          <Route path='/new' exact component={NewTweet} />
          </div>
        }
      </div>
      </Fragment>
      </Router>
    )
  }
}

export default connect()(App)