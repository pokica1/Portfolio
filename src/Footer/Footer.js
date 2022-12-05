import React from 'react';
import {NavLink} from 'react-router-dom';
import './Footer.css';

export const Footer = (props) => (
    <div className="footer">
        <NavLink className="footerLink" to ="/" id="footerURL"> Orsolya Hubbarde</NavLink>
        <a href="https://www.flaticon.com/free-icons/javascript" title="javascript icons">Javascript icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/html-5" title="html 5 icons">Html 5 icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/css-3" title="css 3 icons">Css 3 icons created by Freepik - Flaticon</a>
    </div>
);