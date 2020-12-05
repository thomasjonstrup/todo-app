import { createGlobalStyle, css } from "styled-components";

import darkBackgroundImage from "../images/bg-desktop-dark.jpg";
import lightBackgroundImage from "../images/bg-desktop-light.jpg";

import darkBackgroundImageMobile from "../images/bg-mobile-dark.jpg";
import lightBackgroundImageMobile from "../images/bg-mobile-light.jpg";

interface Props {
	theme: string;
}

/*
# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Bright Blue: hsl(220, 98%, 61%)
- Check Background: linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)

### Neutral

### Light Theme

- Very Light Gray: hsl(0, 0%, 98%)
- Very Light Grayish Blue: hsl(236, 33%, 92%)
- Light Grayish Blue: hsl(233, 11%, 84%)
- Dark Grayish Blue: hsl(236, 9%, 61%)
- Very Dark Grayish Blue: hsl(235, 19%, 35%)

### Dark Theme

- Very Dark Blue: hsl(235, 21%, 11%)
- Very Dark Desaturated Blue: hsl(235, 24%, 19%)
- Light Grayish Blue: hsl(234, 39%, 85%)
- Light Grayish Blue (hover): hsl(236, 33%, 92%)
- Dark Grayish Blue: hsl(234, 11%, 52%)
- Very Dark Grayish Blue: hsl(233, 14%, 35%)
- Very Dark Grayish Blue: hsl(237, 14%, 26%)

## Typography

### Body Copy

- Font size: 18px

### Font

- Family: [Josefin Sans](https://fonts.google.com/specimen/Josefin+Sans)
- Weights: 400, 700


*/

export const GlobalStyles = createGlobalStyle(
	(props: Props) => css`
		:root {
			--color-dark-bg: hsl(230, 17%, 14%);
			--color-dark-bg-top: hsl(232, 19%, 15%);
			--color-dark-card-bg: hsl(228, 28%, 20%);
			--color-dark-text: hsl(228, 34%, 66%);
			--color-dark-textlight: hsl(0, 0%, 100%);
			--very-dark-blue: hsl(235, 21%, 11%);
			--dark-color-light-grayish-blue: hsl(234, 39%, 85%);

			--color-light-bg: hsl(0, 0%, 100%);
			--color-light-bg-top: hsl(225, 100%, 98%);
			--color-light-card-bg: hsl(227, 47%, 96%);
			--color-light-text: hsl(228, 12%, 44%);
			--color-light-textlight: hsl(230, 17%, 14%);
			--very-light-gray: hsl(0, 0%, 98%);
			--light-color-very-dark-grayish-blue: hsl(233, 14%, 35%);

			--color-green: hsl(163, 72%, 41%);
			--color-red: hsl(356, 69%, 56%);
			--color-facebook: hsl(195, 100%, 50%);
			--color-twitter: hsl(203, 89%, 53%);
			--color-instagram: linear-gradient(
				to right,
				hsl(37, 97%, 70%),
				hsl(329, 70%, 58%)
			);
			--color-youtube: hsl(348, 97%, 39%);
			--color-toggle: hsl(230, 22%, 74%);

			body {
				background-image: url(${props.theme === "light"
					? lightBackgroundImage
					: darkBackgroundImage});
				background-color: ${props.theme === "light"
					? "var(--color-light-bg)"
					: "var(--color-dark-bg)"};
				color: ${props.theme === "light"
					? "var(--color-light-textlight)"
					: "var(--color-dark-textlight)"};
				transition: background 0.6s linear;
				font-family: "Josefin Sans", sans-serif;
				background-repeat: no-repeat;
				background-position: top;
				background-size: 100% 300px;
				min-height: 100vh;

				@media (max-width: 768px) {
					background-image: url(${props.theme === "light"
						? lightBackgroundImageMobile
						: darkBackgroundImageMobile});
				}
			}
		}
	`
);
