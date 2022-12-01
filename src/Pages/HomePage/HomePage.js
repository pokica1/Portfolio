import React from 'react';
import { PageContent } from '../../PageContent/PageContent';
import { NavLink } from "react-router-dom";
import { Button } from '../../Button/Button';
import './HomePage.css';

const HomePage = () => (
    <PageContent>
        <div className="container">
            <div className='article'>This is an article</div>
            <div className='image'><img src='homePageImage.svg' alt="women with a laptop"/></div>
        </div>
        <NavLink to="/contact">
            <Button text="Contact"/>
        </NavLink>
    </PageContent>   
)

export default HomePage;