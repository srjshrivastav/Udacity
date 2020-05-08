import React from 'react'

class NewTweet extends React.Component{
    state={
        text:''
    }
    handleChange=(e)=>{
        const text= e.target.value

        this.setState(()=>({
            text
        }))
    }


    render(){
        const {text} = this.state
        const tweetLeft = 280-text.length
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
export default NewTweet