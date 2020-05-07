import API from 'goals-todos-api'

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

function addToDo(todo) {
    return {
        type: ADD_TODO,
        todo
    }
}
function removeToDo(id) {
    return {
        type: REMOVE_TODO,
        id: id
    }
}
function toggleToDo(id) {
    return {
        type: TOGGLE_TODO,
        id: id
    }
}

export function handleAddTodo(name, cb) {
    return (dispatch) => {
        API.saveTodo(name)
            .then((todo) => {
                dispatch(addToDo(todo))
                cb
            })
            .catch(() => {
                alert('Oops! An error occurred try again')
            })
    }

}

export function handleDeleteTodo(todo) {
    return (dispatch) => {
        dispatch(removeToDo(todo.id))
        API.deleteTodo(todo.id)
            .catch(() => {
                dispatch(addToDo(todo))
                alert('Oops! An error Occurred')
            })
    }

}
export function handleToggleTodo(id){
    return  (dispatch)=>{
        dispatch(toggleToDo(id))
        API.saveTodoToggle(id)
        .catch(() => {
            this.props.dispatch(toggleToDo(id))
            alert('Oops! An error occurred')
        })
    }
}