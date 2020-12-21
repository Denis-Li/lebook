import React from 'react';
import headerCcss from'./HeaderC.module.css';
import {NavLink} from 'react-router-dom';


const Header = () => {
    return(
        <header className={headerCcss.header}>
            <div className={headerCcss.header_img}>
                <img src="https://www.freelogodesign.org/file/app/client/thumb/4d4ecfde-94ab-4e21-8ffa-8198454be7ea_200x200.png?1605724386399" alt=""/>
                <div className={headerCcss.loginBlock}>
                    <NavLink to={'/login'}>Login</NavLink>
                </div>
            </div>
        </header>
    )
}



export default Header;