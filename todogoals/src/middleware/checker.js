import {ADD_TODO} from '../Actions/todos'
import {ADD_GOAL} from '../Actions/goals'

const check = (store) => (next) => (action) => {
    if (action.type === ADD_TODO && action.todo.name.toLowerCase().includes('bitcoin'))
        return alert('Nope! Thats a bad Idea')
    if (action.type === ADD_GOAL && action.goal.name.toLowerCase().includes('bitcoin'))
        return alert('Nope! Thats a bad Idea')
    return next(action)

}

export default check