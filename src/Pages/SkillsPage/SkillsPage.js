import React from "react";
import useContentfulHook from "../../useContentfulHook";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaGraduationCap, FaUserTie } from "react-icons/fa";
import { PageContent } from "../../Components/PageContent/PageContent";
import SkillsCards from "../../Components/SkillsCards/SkillsCards";
import * as S from "./SkillsPage.Styled";
// import "./SkillsPage.css";

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
			<S.SkillsPageContainer>
				<S.SkillsTitle data-testid="skillsTitle">
					<HiOutlineLightBulb size="50px" color="white" />
					Skills
				</S.SkillsTitle>
				<S.SkillsCardContainer>
					<SkillsCards skillsCards={data.skillCardCollection.items} />
				</S.SkillsCardContainer>
				<S.EducationTitle>
					<FaGraduationCap size="50px" color="white" />
					{data.educationCollection.items[0].educationTitle}
				</S.EducationTitle>
				<S.EducationContainer>
					<div>
						<S.UniLogo
							src={data.educationCollection.items[0].educationImage.url}
							alt={data.educationCollection.items[0].educationImage.title}
						/>
					</div>
					<S.EducationDescription>
						{data.educationCollection.items[0].educationDescription}
					</S.EducationDescription>
				</S.EducationContainer>
				<S.ExperienceTitle>
					<FaUserTie size="50px" color="white" />
					{data.experienceCollection.items[0].experienceTitle}
				</S.ExperienceTitle>
				<S.ExperienceContainer>
					<S.PerlegoLogo
						src={data.experienceCollection.items[0].companyLogo.url}
						alt={data.experienceCollection.items[0].companyLogo.title}
					/>
					<S.ExperienceDescriptionContainer>
						<S.ExperienceParagraph>
							{documentToReactComponents(
								data.experienceCollection.items[0].experienceDescription.json
							)}
						</S.ExperienceParagraph>
					</S.ExperienceDescriptionContainer>
				</S.ExperienceContainer>
			</S.SkillsPageContainer>
		</PageContent>
	);
}

export default SkillsPage;
