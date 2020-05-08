import React from 'react'
import {connect} from 'react-redux'
import Tweet from './tweet'
import newTweet from './newTweet'

class TweetPage extends React.Component{
    render(){
        const {id,replies} = this.props
        console.log("iiidhaar Hunnn",id,replies)
        return(
            <di>
               <Tweet id={id} />
               <newTweet id={id} />
               {replies.replies!==0 &&<p className='center'>Replies</p>}
               <ul>
                   {replies.map((replyId)=>(
                       <li key={replyId}>
                           {console.log(replyId)}
                           <Tweet id={replyId} />
                       </li>
                   ))}
                   </ul>
            </di>
        )
    }
}
function mapStateToProps({authUser,tweets,users},{id}){


    return{
        id,
        replies:!tweets[id]?
        []:tweets[id].replies.sort((a,b)=>tweets[b].timestamp-tweets[a].timestamp)
    }
}

export default connect(mapStateToProps)(TweetPage)