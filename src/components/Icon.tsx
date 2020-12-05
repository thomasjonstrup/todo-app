import * as React from "react";

import Moon from "../images/icon-moon.svg";
import Cross from "../images/icon-cross.svg";
import Sun from "../images/icon-sun.svg";
import Check from "../images/icon-check.svg";

interface IconProps {
	name: string;
	onClick: any;
}

export const Icon: React.FC<IconProps> = ({ name, onClick }) => {
	const getIcon = () => {
		switch (name) {
			case "moon":
				return Moon;
			case "cross":
				return Cross;
			case "sun":
				return Sun;
			case "check":
				return Check;

			default:
				return "";
		}
	};

	const element = getIcon();

	return <img src={element} alt={name} className="icon" onClick={onClick} />;
};
