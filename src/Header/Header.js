import React from 'react';
import Nav from './Nav'


function Header(props){
    return(
        <header>
            <h1>{props.data.site_name}</h1>
            <nav>
                <li><a href="/">Main</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/users">Users</a></li>
            </nav>
            <Nav nav={props.data.nav}/>
        </header>
    )
}



export default Header;