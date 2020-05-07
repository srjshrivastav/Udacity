import API from 'goals-todos-api'
export const ADD_GOAL = 'ADD_GOAL'
export const REMOVE_GOAL = 'REMOVE_GOAL'

function addGoal(goal) {
    return {
        type: ADD_GOAL,
        goal
    }
}
function removeGoal(id) {
    return {
        type: REMOVE_GOAL,
        id: id
    }
}

export function handleAddGoal(name, cb) {
    return (dispatch) => {
        API.saveGoal(name)
            .then((goal) => {
                dispatch(addGoal(goal))
                cb()
            })
            .catch(() => {
                alert('Oops! An error occurred try again')
            })

    }
}

export function handleDeleteGoal(goal) {
    return (dispatch) => {
        dispatch(removeGoal(goal.id))
       return API.deleteGoal(goal.id)
            .then((goal) => {
                dispatch(addGoal(goal))
            })
            .catch(() => {
                alert('Oops! An error occurred try again')
            })

    }
}