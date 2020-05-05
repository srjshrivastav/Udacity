function createStore(){
    // the Store should have four parts
    //1. the state
    //2. get the state
    //3. Listen to changes on the state.
    //4. update the state

    let state

    getState=()=> state

    return{
        getState
    }
}