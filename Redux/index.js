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



//App Code
//*************************Action Creators********************************














//***************************end******************************




function generateId() {
    return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36)
}
// function app(state={},action){
//     return {
//         todos : todos(state.todos,action),
//         goals : goals(state.goals,action)
//     }
// }

const store = Redux.createStore(Redux.combineReducers({
    todos,
    goals,
    loading,
}), Redux.applyMiddleware(ReduxThunk.default, check))



