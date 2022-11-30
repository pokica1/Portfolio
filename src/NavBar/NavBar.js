import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.css';

export const NavBar = (props) => (
    <nav>
         <ul>
             <li>
                 <NavLink to ="/about">About</NavLink>
             </li>
             <li>
                 <NavLink to ="/skills">Skills</NavLink>
             </li>
             <li>
                 <NavLink className="home"to ="/">Orsolya Hubbarde</NavLink>
             </li>
             <li>
                 <NavLink to ="/CV">CV</NavLink>
             </li>
             <li>
                 <NavLink to ="/contact">Contact</NavLink>
             </li>
         </ul>
     </nav>
 );
 