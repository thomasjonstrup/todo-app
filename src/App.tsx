import React, { useContext, useCallback } from "react";
import "./App.css";
import { Todos } from "./features/todos/Todos";
import { Icon } from "./components/Icon";

import { ThemeContext } from "./context/ThemeContext";

function App() {
	const { theme, setTheme } = useContext(ThemeContext);

	const handleSwitch = useCallback(() => {
		if (theme === "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	}, [setTheme, theme]);

	return (
		<div className="App container">
			<header className="App-header flex space-between">
				<h1>TODO</h1>
				<Icon name="moon" onClick={handleSwitch} />
			</header>
			<Todos />
			<p className="help">Drag and drop to reorder list</p>
		</div>
	);
}

export default App;
