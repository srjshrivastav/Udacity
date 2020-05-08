import {RECEIVE_TWEET} from '../actions/tweets'

export default function tweets(state={},action){

    switch(action.type){
        case RECEIVE_TWEET:
            return{
                ...state,
                ...action.tweets
            }
        default:
            return state
    }

}