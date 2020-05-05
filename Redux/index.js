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
//App Code
//*************************Action Creators********************************
function addToDoAction(todo){
    return{
        type:ADD_TODO,
        todo
    }
}
function removeToDoAction(id){
    return{
        type:REMOVE_TODO,
        id:id
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
    goals
}),Redux.applyMiddleware(check))

store.subscribe(()=>{
    const {todos, goals} = store.getState()
  document.getElementById('todoItem').innerHTML = ''
  document.getElementById('goalItem').innerHTML = ''
    todos.forEach((todo)=>addTodoDOM(todo))
    goals.forEach((goal)=>addGaolDOM(goal))
})

function addTodo(){
    let input = document.getElementById('todo')
    let name = input.value 
    input.value=''
    store.dispatch(addToDoAction({
        name,
        complete:false,
        id: generateId()
    }))
}

function addGoal(){
    let input = document.getElementById('goal')
    let name = input.value 
    input.value=''
    store.dispatch(addGoalAction({
        name,
        id: generateId()
    }))
}

document.getElementById('todoBtn').addEventListener('click',addTodo)
document.getElementById('goalBtn').addEventListener('click',addGoal)


function createRemoveButton(onClick){
    const removeBtn = document.createElement('button')
    removeBtn.innerHTML='X'
    removeBtn.addEventListener('click',onClick)
    return removeBtn

}

function addTodoDOM(todo){
    const node = document.createElement('li')
    const txt = document.createTextNode(todo.name)

    const rmBtn = createRemoveButton(()=>{
        store.dispatch(removeToDoAction(todo.id))
    })
    node.appendChild(txt)
    node.appendChild(rmBtn)
    const btn = document.createElement('button')
    node.style.textDecoration = todo.complete?'line-through':'none'
    node.addEventListener('click',()=>{
        store.dispatch(toggleToDoAction(todo.id))
    })

    document.getElementById('todoItem').appendChild(node)
}
function addGaolDOM(goal){
    const node = document.createElement('li')
    const txt = document.createTextNode(goal.name)
    const btn = createRemoveButton(()=>{
        store.dispatch(removeGoalAction(goal.id))
    })
    node.appendChild(txt)
    node.appendChild(btn)

    document.getElementById('goalItem').appendChild(node)
}
