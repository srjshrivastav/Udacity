import {RECEIVE_TWEET,TOGGLE_TWEET,ADD_TWEET} from '../actions/tweets'

export default function tweets(state={},action){

    switch(action.type){
        case RECEIVE_TWEET:
            return{
                ...state,
                ...action.tweets
            }
        case TOGGLE_TWEET:
            return{
                ...state,
                [action.id]:{
                    ...state[action.id],
                    likes:action.hasLiked === true ?
                    state[action.id].likes.filter((uid)=>uid!==action.authUser)
                    :state[action.id].likes.concat([action.authUser])
                }
            }
        case ADD_TWEET:
            const {tweet} = action
            let replyingTo={}
            if(tweet.replyingTo!==null){
                replyingTo={
                    [tweet.replyingTo]:{
                        ...state,
                        replies:state[tweet.replyTo].replies.concat([tweet.id])
                    }
                }
            }

            return{
                ...state,
                [action.id]:action.tweet,
                ...replyingTo 

            }
        default:
            return state
    }

}