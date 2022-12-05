import React from 'react';
import { PageContent } from '../../PageContent/PageContent';
import './AboutPage.css'

const AboutPage = () => (
    <PageContent>
        <h1>About me</h1>
        <div id='article-container'>
            <div id='info'>This is an article</div>
            <div className='image'><img src='profilePicLinkedin.jpg' alt="Orsolya smiling"/></div>
        </div>
        
    </PageContent>   
)

export default AboutPage;