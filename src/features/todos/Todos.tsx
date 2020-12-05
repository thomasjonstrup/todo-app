import React, { useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TodoItem } from "./TodoItem";
import styles from "./Todos.module.css";

import styled from "styled-components";

import { Card } from "../../components/Card";

import { selectTodos, addTodo } from "./todosSlice";
import { ThemeContext } from "../../context/ThemeContext";

export interface CounterProps {}

export interface TodosItem {
	/* 	id:  */
	text: string;
	completed: boolean;
}

interface CardProps {
	children?: JSX.Element | JSX.Element[];
}

const TodoFilterContainer = styled.div<{ scheme: string }>`
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
	display: flex;
	justify-content: space-evenly;
	font-size: 1.2rem;
`;

const TodoList = styled.div<{ scheme: string }>`
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
`;

export const Todos: React.FC<CounterProps> = ({ ...props }) => {
	const todos = useSelector(selectTodos);
	console.log("todos :>> ", todos);
	const dispatch = useDispatch();

	const [filter, setFilter] = useState("");

	const [todoText, setTodoText] = useState("");

	const todosFiltered =
		filter.length > 0
			? todos.filter((item: any) =>
					filter === "completed" ? item[filter] : !item.completed
			  )
			: todos;

	const onChange = (e: React.FormEvent<HTMLInputElement>) => {
		const newValue = e.currentTarget.value;

		setTodoText(newValue);
	};

	const filterCompletedTodos = () => {
		setFilter("completed");
	};

	const filterClear = () => {
		setFilter("");
	};

	const filterActive = () => {
		setFilter("active");
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (todoText.length > 0) {
			dispatch(addTodo(todoText));
			setTodoText("");
		}
	};

	const { theme } = useContext(ThemeContext);

	return (
		<>
			<Card>
				<form className="item flex" onSubmit={onSubmit} name="todoform">
					<input
						type="text"
						name=""
						value={todoText}
						onChange={onChange}
					/>
				</form>
			</Card>
			<TodoList scheme={theme}>
				{todosFiltered.map((item: any, index) => {
					console.log("item", item);
					return (
						<TodoItem
							id={item.id}
							text={item.text}
							completed={item.completed}
							key={item.id}
						/>
					);
				})}
			</TodoList>
			<TodoFilterContainer scheme={theme}>
				<>
					<p>{`${todosFiltered.length} items left`}</p>
					<p onClick={filterClear}>All</p>
					<p onClick={filterActive}>Active</p>
					<p onClick={filterCompletedTodos}>Completed</p>
					<p onClick={filterClear}>Clear Completed</p>
				</>
			</TodoFilterContainer>
		</>
	);
};
