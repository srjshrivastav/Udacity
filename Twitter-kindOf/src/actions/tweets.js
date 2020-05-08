import {saveLikeToggle} from '../utils/api'

export const RECEIVE_TWEET = 'RECEIVE_TWEET'
export const TOGGLE_TWEET ='TOGGLE_TWEET'
export function getTweet(tweets){
    return{
        type:RECEIVE_TWEET,
        tweets
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