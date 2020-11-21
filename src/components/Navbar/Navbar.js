import React from 'react';
import { NavLink } from 'react-router-dom';
import navbarCss from './Navbar.module.css';
console.log(navbarCss);

const Navbar = () => {
    return(
        <nav className={navbarCss.nav}>
            <div  className={navbarCss.item}>
                <NavLink to="/profile" activeClassName={navbarCss.active}>Profile</NavLink> 
            </div>
            <div className={`${navbarCss.item} ${navbarCss.active}`}>
                <NavLink to="/dialogs" activeClassName={navbarCss.active}>Massages</NavLink>
            </div>
            <div  className={navbarCss.item}>
                <NavLink to="/news" activeClassName={navbarCss.active}>News</NavLink> 
            </div>
      </nav>
    )
}



export default Navbar;