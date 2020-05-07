import {handleAddGoal,handleDeleteGoal} from '../Actions/goals'
import React from 'react'
import {connect} from 'react-redux'
import LIST from './List'


class GOAL extends React.Component {
    addItem = (e) => {
        e.preventDefault()
        this.props.dispatch(handleAddGoal(this.input.value, () => { this.input.value = '' }))
    }

    removeItem = (goal) => {
        this.props.dispatch(handleDeleteGoal(goal))
    }


    render() {
        return (
            <div>
                <h2>GOAL</h2>
                <input id='goal' placeholder='Enter GOAL' ref={(value) => this.input = value} />
                <button onClick={(event) => this.addItem(event)}> ADD GOAL</button>
                <LIST items={this.props.goals}
                    remove={this.removeItem} />
            </div>
        )
    }
}
export default connect((state) => ({
    goals: state.goals
}))(GOAL)