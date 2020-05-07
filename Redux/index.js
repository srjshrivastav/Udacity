//Library code

// function createStore(reducer){
//     // the Store should have four parts
//     //1. the state
//     //2. get the state
//     //3. Listen to changes on the state.
//     //4. update the state

//     let state
//     let listneres=[]

//     const subscribe=(listnere)=>{
//         listneres.push(listnere)
//         return ()=>{
//             listneres=listneres.filter((l)=>l !== listnere)
//         }
//     }
//     const dispatch=(action)=>{
//         //call the function to change the state
//         state=reducer(state,action)
//         listneres.forEach((listnere)=>listnere())
//     }

//     const getState=()=> state

//     return{
//         getState,
//         subscribe,
//         dispatch
//     }
// }


//Action Types

const ADD_GOAL = 'ADD_GOAL'
const REMOVE_GOAL = 'REMOVE_GOAL'
const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const RECEIVE_DATA = 'RECEIVE_DATA'
//App Code
//*************************Action Creators********************************
function addToDoAction(todo){
    return{
        type:ADD_TODO,
        todo
    }
}

function handleAddTodo(name,cb){
    return (dispatch)=>{
        API.saveTodo(name)
        .then((todo)=>{
            dispatch(addToDoAction(todo))
            cb
        })
        .catch(()=>{
            alert('Oops! An error occurred try again')
        })}

}
function removeToDoAction(id){
    return{
        type:REMOVE_TODO,
        id:id
    }
}

function handleDeleteTodo(todo){
    return (dispatch)=>{
        dispatch(removeToDoAction(todo.id))
        API.deleteTodo(todo.id)
            .catch(()=>{
                dispatch(addToDoAction(todo))
                alert('Oops! An error Occurred')
            })
    }

}

function toggleToDoAction(id){
    return{
        type:TOGGLE_TODO,
        id:id
    }
}
function addGoalAction(goal){
    return{
        type:ADD_GOAL,
        goal
    }
}
function handleAddGoal(name,cb){
    return (dispatch)=>{
        API.saveGoal(name)
        .then((goal)=>{
           dispatch(addGoalAction(goal))
           cb
        })
        .catch(()=>{
            alert('Oops! An error occurred try again')
        })

    }
}

function receiveDataAction(todos,goals){
    return{
        type:RECEIVE_DATA,
        todos,
        goals
    }
}

function removeGoalAction(id){
    return{
        type:REMOVE_GOAL,
        id:id
    }
}

//***************************end******************************
function todos(state=[],action){
    switch(action.type){
        case ADD_TODO:
            return state.concat([action.todo])
        case REMOVE_TODO:
            return state.filter((todo)=>todo.id!==action.id)
        case TOGGLE_TODO:
            return state.map((todo)=>(
                todo.id !== action.id?todo:Object.assign({},todo,{complete:!todo.complete})
            ))
        case RECEIVE_DATA:
            return action.todos
        default:
            return state
    }
}

function goals(state=[],action){
    switch(action.type){
        case ADD_GOAL:
            return state.concat([action.goal])
        case REMOVE_GOAL:
            return state.filter((goal)=>goal.id!==action.id)
        case RECEIVE_DATA:
            return action.goals
        default:
            return state
    }
}
function loading(state=true,action){
    switch(action.type){
        case RECEIVE_DATA:
            return false
        default:
            return state
    }
}

function generateId(){
    return Math.random().toString(36).substring(2)+(new Date()).getTime().toString(36)
}
// function app(state={},action){
//     return {
//         todos : todos(state.todos,action),
//         goals : goals(state.goals,action)
//     }
// }
const check=(store)=>(next)=>(action)=>{
    if(action.type===ADD_TODO && action.todo.name.toLowerCase().includes('bitcoin'))
            return alert('Nope! Thats a bad Idea')
    if(action.type===ADD_GOAL && action.goal.name.toLowerCase().includes('bitcoin'))
            return alert('Nope! Thats a bad Idea')
    return next(action)

}
const store = Redux.createStore(Redux.combineReducers({
    todos,
    goals,
    loading,
}),Redux.applyMiddleware(ReduxThunk.default,check))





