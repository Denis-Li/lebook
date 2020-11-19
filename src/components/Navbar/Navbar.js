import React from 'react';
import navbarCss from './Navbar.module.css';
console.log(navbarCss);

const Navbar = () => {
    return(
        <nav className={navbarCss.nav}>
            <div  className={navbarCss.item}>
                <a href="/">Profile</a> 
            </div>
            <div className={navbarCss.item}>
                <a href="/" className={`${navbarCss.item} ${navbarCss.active}`}>Massages</a>
            </div>
      </nav>
    )
}



export default Navbar;