import {RECEIVE_TWEET} from '../actions/tweets'
import {TOGGLE_TWEET} from '../actions/tweets'

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
        default:
            return state
    }

}