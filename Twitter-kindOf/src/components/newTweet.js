import React from 'react'
import {connect} from 'react-redux'
import {handleaddTweet} from '../actions/tweets'
import {Redirect} from 'react-router-dom'

class NewTweet extends React.Component{
    state={
        text:'',
        gohome:false
    }
    handleChange=(e)=>{
        const text= e.target.value

        this.setState(()=>({
            text
        }))
    }
    handleNewTweet=(e)=>{
        e.preventDefault()
        const {text}=this.state
        const {dispatch,id}=this.props

        dispatch(handleaddTweet(text,id))

        this.setState(()=>({
            text : '',
            gohome :id?false:true
        }))
    }


    render(){
        const {text,gohome} = this.state
        const tweetLeft = 280-text.length
        if(gohome===true){
            return <Redirect to='/' />
        }

        return(
            <div>
                <h3 className='center'>Compose New Tweet</h3>
                <form  className='new-tweet' onSubmit={this.handleNewTweet}>
                <textarea
                className='textarea'
                placeholder="What's happening?" 
                maxLength={280}
                onChange={this.handleChange}
                value={text}></textarea>
                {tweetLeft<=100 && (
                    <div className='tweet-length'>{tweetLeft}</div>
                )}
                <button type='submit' className='btn' disabled={text===''}>Submit</button>


                </form>
                
            </div>
        )
    }
}
export default connect()(NewTweet)