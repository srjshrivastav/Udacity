import React from 'react'
import {render} from 'react-dom'

const context = React.createContext()

function Parent(){
    return(
        <div>
            <h1>Parent</h1>
            <Child />
        </div>
    )
}

function Child(){
    return(
        <div>
            <h2>Child</h2>
            <grandChild />
        </div>
    )
}

function grandChild(){
    return(
    <context.Consumer>
       {(name)=>{
                <div>
                    <h3>Grandchild</h3>
                    <p>name:{name}</p>
                </div>
       }} 
    </context.Consumer>
    )
}

class App extends React.Component{
    render(){
        const name ='Suraj'
        return(
        <context.Provider value={name}>
                  <Parent />
        </context.Provider>
        )
    }
}

render(<App />,document.getElementById('root'))