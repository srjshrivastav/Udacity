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
    const  store = createStore()

    const unsubscribe = store.subscribe(()=>{
        console.log('The new state is ',store.getState())
    })
    unsubscribe()