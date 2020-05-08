import {combineReducers} from 'redux'

import users  from './users'
import tweets from './tweets'
import authUser from './authUser'


export default combineReducers(
    {
        authUser,
        users,
        tweets
    }
)