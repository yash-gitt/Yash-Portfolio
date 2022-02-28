import React from 'react';
import yash from '../img/yash.jpeg';
import {NavLink} from 'react-router-dom';

function NavBar() {
  return (
    <div className="NavBar">
        <nav className="nav">
            <div className="profile">
               <img src={yash} alt=""/>
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/" exact activeClassName="active">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" exact activeClassName="active">
                        About
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/education" exact activeClassName="active">
                        Education
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/projects" exact activeClassName="active">
                        Projects
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" exact activeClassName="active">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    </div>

  )
}
export default NavBar;
