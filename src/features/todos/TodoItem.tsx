import React, { useCallback, useContext } from "react";
import { useDispatch } from "react-redux";

import { toggleTodo, removeTodo } from "./todosSlice";

import { Icon } from "../../components/Icon";
import { ThemeContext } from "../../context/ThemeContext";
import styled from "styled-components";

export interface TodoItemProps {
	id: any;
	text: string;
	completed: boolean;
}

const TodoItemContainer = styled.div<{ scheme: string; completed: boolean }>`
	align-items: center;
	display: flex;
	gap: 0.55rem;
	flex-grow: 1;
	border-bottom: 1px solid
		${(props) =>
			props.scheme === "dark"
				? "var(--dark-color-light-grayish-blue)"
				: "var(--light-color-very-dark-grayish-blue)"};
	text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
	padding: 1rem;
	display: grid;
	grid-template-columns: 10% auto 10%;
	align-items: center;
`;
export const TodoItem: React.FC<TodoItemProps> = ({
	id,
	text,
	completed,
	...props
}) => {
	const dispatch = useDispatch();

	const handleRemove = useCallback(() => {
		dispatch(removeTodo(id));
	}, [id, dispatch]);

	const handleToggleTodo = useCallback(() => {
		dispatch(toggleTodo(id));
	}, [id, dispatch]);

	const { theme } = useContext(ThemeContext);

	return (
		<TodoItemContainer scheme={theme} completed={completed}>
			<input
				type="checkbox"
				checked={completed}
				id={`checkbox-${id}`}
				className="option-input"
				onClick={handleToggleTodo}
			/>
			<label htmlFor={`checkbox-${id}`} onClick={handleToggleTodo}>
				{text}
			</label>
			<Icon name="cross" onClick={handleRemove} />
		</TodoItemContainer>
	);
};
