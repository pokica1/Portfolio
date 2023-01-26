import styled from "styled-components/macro";
import { DeviceSizes } from "../Styled/DeviceSizes";

export const FormImageContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 100px;
	padding-top: 100px;
	max-width: 55%;
	margin-left: auto;
	margin-right: auto;
	${DeviceSizes.tablet} {
		flex-direction: column;
		padding-top: 25px;
		gap: 0;
		max-width: 90%;
	}
	${DeviceSizes.laptop} {
		padding-top: 0;
		max-width: 90%;
	}
`;
export const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	font-size: 20px;
	flex-grow: 2;
	${DeviceSizes.tablet} {
		order: 1;
		margin-bottom: 20px;
	}
`;

export const SuccessMessage = styled.div`
	display: flex;
	align-items: center;
	color: white;
	font-size: 30px;
	margin-right: 100px;
	justify-content: center;
	${DeviceSizes.tablet} {
		margin-right: 0px;
	}
`;

export const Label = styled.label`
	color: white;
	font-size: 20px;
	padding: 10px;
`;

export const TextArea = styled.textarea`
	width: 100%;
	max-height: 100px;
	min-height: 100px;
	outline: none;
	border-radius: 20px;
	margin-bottom: 20px;
	font-size: 20px;
	box-sizing: border-box;

	&:focus {
		border: 8px solid #89e9f0;
	}
`;

export const SubmitButton = styled.input`
	align-self: flex-end;
	border-radius: 20px;
	padding-top: 10px;
	padding-bottom: 10px;
	padding-left: 35px;
	padding-right: 35px;
	background-color: white;
	text-decoration: none;
	color: black;
	font-weight: bold;
	font-size: 20px;
	border: none;
`;

export const ContactImage = styled.img`
	width: 40%;
	${DeviceSizes.tablet} {
		width: 50%;
		height: auto;
		padding-left: 25px;
		padding-right: 25px;
		order: 0;
		align-self: center;
	}
	${DeviceSizes.laptop} {
		width: 40%;
		height: auto;
		padding-right: 20px;
	}
`;
