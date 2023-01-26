import styled from "styled-components/macro";

export const InputField = styled.input`
	height: 50px;
	width: 100%;
	outline: none;
	border-radius: 20px;
	font-size: 20px;
	box-sizing: border-box;

	&:focus {
		border: 8px solid #89e9f0;
	}
`;

export const Label = styled.label`
	color: white;
	font-size: 20px;
	padding: 10px;
`;
