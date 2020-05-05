//Library code

function createStore(reducer){
    // the Store should have four parts
    //1. the state
    //2. get the state
    //3. Listen to changes on the state.
    //4. update the state

    let state
    let listneres=[]

    const subscribe=(listnere)=>{
        listneres.push(listnere)
        return ()=>{
            listneres=listneres.filter((l)=>l !== listnere)
        }
    }
    const dispatch=(action)=>{
        //call the function to change the state
        state=reducer(state,action)
        listneres.forEach((listnere)=>listnere())
    }

    const getState=()=> state

    return{
        getState,
        subscribe,
        dispatch
    }
}


//Action Types

const ADD_GOAL = 'ADD_GOAL'
const REMOVE_GOAL = 'REMOVE_GOAL'
const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
//App Code
function todos(state=[],action){
    switch(action.type){
        case ADD_TODO:
            return state.concat([action.todo])
        case REMOVE_TODO:
            return state.filter((todo)=>todo.id!==action.id)
        case TOGGLE_TODO:
            return state.map((todo)=>{
                todo.id !== action.id?todo:Object.assign({},todo,{complete:!todo.complete})
            })
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
function app(state={},action){
    return {
        todos : todos(state.todos,action),
        goals : goals(state.goals,action)
    }
}
const store = createStore(app)

store.subscribe(()=>{
    console.log('This is the state ',store.getState())
})

store.dispatch({
    type:'ADD_TODO',
    todo:{
        id:0,
        name:'Learn redux',
        complete:false
    }
})

