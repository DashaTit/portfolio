import heart from "./../../img/icons/heart.svg";

import { NavLink } from "react-router-dom";

import "./style.css";
import BtnDarkMode from "../btnDarkMode/btnDarkMode";


const Navbar = () => {
    const activeLink = "nav-list__link nav-list__link--active"
    const normal = "nav-list__link"
    return ( 
        <nav className="nav">
            <div className="container">
                    <div className="nav-row">
                        <NavLink to="/" className="logo">
                            <img className="heart" src={heart} alt="" />
                            <strong>Portfolio</strong>
                        </NavLink>
                        
                        <BtnDarkMode></BtnDarkMode>
                        <ul className="nav-list">
                            <li className="nav-list__item">
                                <NavLink to="/" className={({isActive}) => isActive ? activeLink : normal}>
                                    Home
                                </NavLink>
                                
                            </li>
                            <li className="nav-list__item">
                                <NavLink to="/projects" className={({isActive}) => isActive ? activeLink : normal}>
                                    Projects
                                </NavLink>
                            </li>
                            <li className="nav-list__item">
                                <NavLink to="/contacts" className={({isActive}) => isActive ? activeLink : normal}>
                                    Contacts
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
        </nav>
    );
}

export default Navbar;