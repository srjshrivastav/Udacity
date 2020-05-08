export const RECEIVE_TWEET = 'RECEIVE_TWEET'
export function getTweet(tweets){
    return{
        type:RECEIVE_TWEET,
        tweets
    }
}