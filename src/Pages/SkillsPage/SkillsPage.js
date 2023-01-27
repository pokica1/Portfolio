import React from "react";
import { PageContent } from "../../Components/PageContent/PageContent";
import "./SkillsPage.css";
import SkillsCards from "../../Components/SkillsCards/SkillsCards";
import useContentfulHook from "../../useContentfulHook";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaGraduationCap, FaUserTie } from "react-icons/fa";

/*Collection order in Contentful: https://www.contentful.com/developers/docs/references/graphql/#/reference/collection-order */
const query = `query {
	skillCardCollection (order: [sys_id_DESC]) {
	  items {
		sys {
			id
		}
		skillCardImage {
		  url
		  title
		}
		skillCardTitle
	  }
	}experienceCollection{
		items{
			experienceTitle
			companyLogo {
				url
				title
			}
			experienceDescription {
				json
			}
		}	
	}
	educationCollection{
		items{
			educationTitle
			educationImage{
				url
				title
			}
			educationDescription
		}
	}
  }`;

function SkillsPage() {
	let { data, errors } = useContentfulHook(query);

	if (errors) {
		return <div>{errors.map((error) => error.message).join(",")}</div>;
	}

	if (!data) {
		return "Loading...";
	}

	return (
		<PageContent>
			<div id="skills-content">
				<h1 id="skills-title">
					<HiOutlineLightBulb size="50px" color="white" />
					Skills
				</h1>
				<div id="skills-container">
					<SkillsCards skillsCards={data.skillCardCollection.items} />
				</div>
				<h1 id="education-title">
					<FaGraduationCap size="50px" color="white" />
					{data.educationCollection.items[0].educationTitle}
				</h1>
				<div id="education-container">
					<div>
						<img
							id="uni-logo"
							src={data.educationCollection.items[0].educationImage.url}
							alt={data.educationCollection.items[0].educationImage.title}
						/>
					</div>
					<div id="education-description">
						{data.educationCollection.items[0].educationDescription}
					</div>
				</div>
				<h1 id="experience-title">
					<FaUserTie size="50px" color="white" />
					{data.experienceCollection.items[0].experienceTitle}
				</h1>
				<div id="experience-container">
					<img
						id="perlego-logo"
						src={data.experienceCollection.items[0].companyLogo.url}
						alt={data.experienceCollection.items[0].companyLogo.title}
					/>
					<div id="description">
						<p className="skillsParagraph">
							{documentToReactComponents(
								data.experienceCollection.items[0].experienceDescription.json
							)}
						</p>
					</div>
				</div>
			</div>
		</PageContent>
	);
}

export default SkillsPage;
