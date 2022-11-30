import React from 'react';
import {NavLink} from 'react-router-dom';
import './Footer.css';

export const Footer = (props) => (
    <div className="footer">
        <NavLink className="footerLink" to ="/" id="footerURL"> Orsolya Hubbarde</NavLink>
    </div>
);