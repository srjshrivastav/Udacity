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



//App Code
function todos(state=[],action){
    if(action.type==='ADD_TODO')
        return state.concat([action.todo])

    return state
}

const store = createStore(todos)

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

