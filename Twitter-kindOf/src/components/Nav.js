import React from 'react'
import {NavLink} from 'react-router-dom'

class NavBar extends React.Component{
    render(){
        return(

            <nav className='nav'>
                <ul>
                    <li>
                        <NavLink to='/' exact activeClassName='active'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/new' exact activeClassName='active'>
                            New Tweet
                        </NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar