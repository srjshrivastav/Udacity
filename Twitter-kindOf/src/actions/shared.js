import {getInitialData} from '../utils/api'
import {getUser} from './users'
import {getTweet} from './tweets'
import {setAuthUser} from './authUser'
import {showLoading,hideLoading} from 'react-redux-loading'
const AUTH_ID = 'tylermcginnis'

export function handleInitialData(){
    return (dispatch)=>{
        dispatch(showLoading())
        return getInitialData()
        .then(({users,tweets})=>{
            dispatch(getUser(users))
            dispatch(getTweet(tweets))
            dispatch(setAuthUser(AUTH_ID))
            dispatch(hideLoading())
        })
    }
}