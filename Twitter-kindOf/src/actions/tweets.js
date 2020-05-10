import {saveLikeToggle,saveTweet} from '../utils/api'
import {showLoading,hideLoading} from 'react-redux-loading'

export const RECEIVE_TWEET = 'RECEIVE_TWEET'
export const TOGGLE_TWEET ='TOGGLE_TWEET'
export const ADD_TWEET ='ADD_TWEET'
export function getTweet(tweets){
    return{
        type:RECEIVE_TWEET,
        tweets,
    }
}

function addTweet(tweet){
    return{
        type:ADD_TWEET,
        tweet
    }
}
export function handleaddTweet(text,replyingTo){
    return(dispatch,getState)=>{
        const {authUser} = getState()
        dispatch(showLoading())
        console.log("Authorrrr::",authUser)
        return saveTweet({
           text,
           author:authUser,
           replyingTo 
        }).then((tweet)=>dispatch(addTweet(tweet)))
        .then(()=>dispatch(hideLoading()))
    }
}
function toggleTweet({id,authUser,hasLiked}) {
    return{
        type:TOGGLE_TWEET,
        id,
        authUser,
        hasLiked
    }
}

export function handleToggleTweet(info){
    return (dispatch)=>{
        dispatch(toggleTweet(info))

        return saveLikeToggle(info)
        .catch((e)=>{
            dispatch(toggleTweet(info))
            alert('Error in liking the tweet')
        })

    }
}