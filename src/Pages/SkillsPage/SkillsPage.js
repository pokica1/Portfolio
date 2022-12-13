import React from "react";
import { PageContent } from "../../PageContent/PageContent";
import "./SkillsPage.css";
import { SkillsCard } from "../../SkillsCard/SkillsCard";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";

const SkillsPage = () => (
	<PageContent>
		<h1>
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
					alt="Kingstoin University logo, black background, white fonts"
				/>
			</div>
			<div id="education-description">
				2019-2022 BSc Computer Science - First Class
				<br />
				Kingston University
			</div>
		</div>
	</PageContent>
);

export default SkillsPage;
