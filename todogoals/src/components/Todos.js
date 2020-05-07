import React from 'react'
import {handleAddTodo,handleDeleteTodo,handleToggleTodo} from '../Actions/todos'
import {connect} from 'react-redux'
import LIST from './List'

 class TODO extends React.Component {
    addItem = (e) => {
        e.preventDefault()
        this.props.dispatch(handleAddTodo(this.input.value,
            () => { this.input.value = '' }))
    }
    removeItem = (todo) => {
        this.props.dispatch(handleDeleteTodo(todo))
    }
    toggle = (id) => {
        this.props.dispatch(handleToggleTodo(id))

    }

    render() {
        return (
            <div>
                <h2>TODOs</h2>
                <input id='todo' placeholder='Enter TODO' ref={(value) => this.input = value} />
                <button onClick={(event) => this.addItem(event)}> ADD TODO</button>

                <LIST items={this.props.todos}
                    remove={this.removeItem}
                    toggle={this.toggle} />
            </div>
        )
    }
}
export default connect((state)=>({
    todos:state.todos
}))(TODO)