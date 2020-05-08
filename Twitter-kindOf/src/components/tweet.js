import React from 'react'
import {connect} from 'react-redux'
import {formatTweet,formatDate} from '../utils/helpers'
import {TiArrowBackOutline,TiHeartOutline,TiHeartFullOutline} from 'react-icons/ti/index'
import {handleToggleTweet} from '../actions/tweets'
import {Link} from 'react-router-dom'

class Tweet extends React.Component{
    handleLikes=(e)=>{
            e.preventDefault()
            const {dispatch ,tweet, authUser}=this.props

            dispatch(handleToggleTweet({
                id:tweet.id,
                hasLiked:tweet.hasLiked,
                authUser
            }))
    }

    toParent=(e,id)=>{
        e.preventDefault()
    }

    render(){
        const {tweet}=this.props

        const {name,replies,likes,timestamp,avatar,text,id,hasLiked,parent} = tweet

        return(
            <Link to={`/tweet/${id}`} className='tweet'>
                <img src={avatar} className='avatar' alt={`Avatar of ${name}`}/>
                <div>
                    <div className='tweet-info'>
                        <div>
                        <span>{name}</span>
                        <div>{formatDate(timestamp)}</div>
                        {parent && (
                            <button className='replying-to' onClick={(e)=>this.toParent(e,parent.id)}>
                                Replying to @{parent.author}
                            </button>
                        )}
                        <p>{text}</p>
                        <div className='tweet-icons'>
                        <TiArrowBackOutline className='tweet-icon'/>
                        <span>{
                            replies!==0 && replies}</span>
                        <button className='heart-button' onClick={this.handleLikes} >{hasLiked ? <TiHeartFullOutline color='#e0245e' className='tweet-icon'/>
                        :<TiHeartOutline className='tweet-icon'/>}</button>
                        <span>{likes!==0&&likes}</span>
                        </div>

                        </div>
                    </div>
                </div>

            </Link>
        )
    }
}
function  mapStateToProps({authUser,tweets,users},{id}) {
    const tweet = tweets[id]
    const parentTweet = tweet? tweets[tweet.replyingTo] :null
    return{
        authUser,
        tweet : tweet?formatTweet(tweet,users[tweet.author],authUser,parentTweet):null
    }
}
export default connect(mapStateToProps)(Tweet)