function todos(state,action){
    if(action.type==='add_todo')
        return state.concate([action.todo])

    return state
}


function createStore(){
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

    const getState=()=> state

    return{
        getState,
        subscribe
    }
}
