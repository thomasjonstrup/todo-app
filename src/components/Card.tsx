import React, { useContext } from "react";
import styled from "styled-components";

import { ThemeContext } from "../context/ThemeContext";

/* const CardContainer = styled.div<{ scheme: string; icon: string }>`
border-radius: 5px;
overflow: hidden;
//border-top: 5px solid var(--color-${(props) => props.icon});
background: ${(props) =>
	props.scheme === "dark"
		? "var(--color-dark-card-bg)"
		: "var(--color-light-card-bg)"};
padding: 2rem 0;

box-shadow: 0 3px 6px rgba(32,32,32,.1), 0 3px 6px rgba(32,32,32,.1);
`; */
const CardContainer = styled.div<{ scheme: string }>`
	background-color: ${(props) =>
		props.scheme === "dark"
			? "var(--very-dark-blue)"
			: "var(--very-light-gray)"};
	color: ${(props) =>
		props.scheme === "dark"
			? "var(--dark-color-light-grayish-blue)"
			: "var(--light-color-very-dark-grayish-blue)"};
	border-radius: 0.25rem;
	box-shadow: 0 2rem 2rem -2rem rgba(0, 0, 0, 0.3);
	/* opacity: 0.5; */
	flex-grow: 1;
	padding: 1rem;
	margin: 5rem 0 5rem;
`;

interface CardProps {
	children?: JSX.Element | JSX.Element[];
}

export const Card: React.FC<CardProps> = ({ children, ...props }) => {
	const { theme } = useContext(ThemeContext);
	return <CardContainer scheme={theme}>{children}</CardContainer>;
};
