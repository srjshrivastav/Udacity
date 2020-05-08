
const logger=(store)=(next)=(action)=>{
    console.group(action.type)
    console.log("the Action",action)
    const returnValue = next(action)
    console.log("the New State is ",store.getState()) 
    console.groupEnd()
    return returnValue
}

export default logger