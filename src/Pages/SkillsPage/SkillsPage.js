import React from 'react';
import { PageContent } from '../../PageContent/PageContent';
import './SkillsPage.css';
import { SkillsCard } from '../../SkillsCard/SkillsCard';

const SkillsPage = () => (
    <PageContent>
        <h1>Skills</h1>
        <div id='skills-container'>
            <SkillsCard src='js.png' alt='javaScript logo' title='JavaScript'/>
            <SkillsCard src='logo512.png' alt='React logo' title='React'/>
            <SkillsCard src='html.png' alt='HTML logo' title='HTML'/>
            <SkillsCard src='css.png' alt='CSS logo' title='CSS'/>
            <SkillsCard src='logo512.png' alt='React Native logo' title='React Native'/>
        </div>
        
        
    </PageContent>   
)

export default SkillsPage;