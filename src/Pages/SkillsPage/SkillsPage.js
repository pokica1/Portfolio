import React from "react";
import { PageContent } from "../../Components/PageContent/PageContent";
import "./SkillsPage.css";
import { SkillsCard } from "../../Components/SkillsCard/SkillsCard";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaGraduationCap, FaUserTie } from "react-icons/fa";

const SkillsPage = () => (
	<PageContent>
		<div id="skills-content">
			<h1 id="skills-title">
				<HiOutlineLightBulb size="50px" color="white" />
				Skills
			</h1>
			<div id="skills-container">
				<SkillsCard src="js.png" alt="javaScript logo" title="JavaScript" />
				<SkillsCard src="logo512.png" alt="React logo" title="React" />
				<SkillsCard src="html.png" alt="HTML logo" title="HTML" />
				<SkillsCard src="css.png" alt="CSS logo" title="CSS" />
				<SkillsCard src="java.png" alt="Java logo" title="Java" />
				<SkillsCard
					src="logo512.png"
					alt="React Native logo"
					title="React Native"
				/>
				<SkillsCard src="sql-server.png" alt="SQL logo" title="SQL" />
				<SkillsCard
					src="tableau-software.svg"
					alt="Tableau logo"
					title="Tableau"
				/>
			</div>
			<h1 id="education-title">
				<FaGraduationCap size="50px" color="white" />
				Education
			</h1>
			<div id="education-container">
				<div>
					<img
						id="uni-logo"
						src="KingstonUniLogo.png"
						alt="Kingston University logo, black background, white fonts"
					/>
				</div>
				<div id="education-description">
					2019-2022 BSc Computer Science - First Class - Kingston University
				</div>
			</div>
			<h1 id="experience-title">
				<FaUserTie size="50px" color="white" />
				Experience
			</h1>
			<div id="experience-container">
				<img id="perlego-logo" src="Perlego.jpg" alt="P letter as a logo" />
				<div id="description">
					<h3 className="skillsParagraph">
						Perlego - April 2020 - September 2020 - Quality Assurance Engineer
						Intern
					</h3>
					<p className="skillsParagraph">
						I did automation testing with Cypress alongside some manual testing.
						I worked in a small team following Agile methodology.
					</p>
					<p className="skillsParagraph">
						My main responsibilities were to write tests for existing web pages
						using Cypress; write tests for pages that were being built and to
						help out with manual testing before a new release.
					</p>
					<p className="skillsParagraph">
						Other day-to-day duties included keeping an eye on the testing
						dashboard. After finding failed test on the dashboard, I had to look
						into why is the test failing, fix the test or report to a developer
						or create a ticket to fix the issue.
					</p>
					<p className="skillsParagraph">
						Also, I have done some code reviews, to check other QA’s tests and
						try to help when other QA team members were stuck on something.
					</p>
				</div>
			</div>
		</div>
	</PageContent>
);

export default SkillsPage;
