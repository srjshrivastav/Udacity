import React from 'react'
import {connect} from 'react-redux'
import Tweet from './tweet'
import NewTweet from './newTweet'

class TweetPage extends React.Component{
    render(){
        const {id,replies} = this.props
        return(
            <div>
               <Tweet id={id} />
               <NewTweet id={id} />
               {replies.length!==0 &&<p className='center'>Replies</p>}
               <ul>
                   {replies.map((replyId)=>(
                       <li key={replyId}>
                           <Tweet id={replyId} />
                       </li>
                   ))}
                   </ul>
            </div>
        )
    }
}
function mapStateToProps({authUser,tweets,users},props){
    const {id}  = props.match.params

    return{
        id,
        replies:!tweets[id]?
        []:tweets[id].replies.sort((a,b)=>tweets[b].timestamp-tweets[a].timestamp)
    }
}

export default connect(mapStateToProps)(TweetPage)