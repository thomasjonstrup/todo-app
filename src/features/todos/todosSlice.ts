import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { nanoid } from "nanoid";

interface TodosState {
	todoslist: object[];
}

interface Item {
	id: string;
	text: string;
	completed: boolean;
}

const initialState: TodosState = { todoslist: [] };

const todosSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo(state, item /* action: PayloadAction<Item> */) {
			console.log("item", item);
			const id = nanoid();

			state.todoslist.push({
				id: id,
				completed: false,
				text: item.payload,
			});
		},
		removeTodo(state, action) {
			const index = state.todoslist.findIndex(
				(item: any) => item.id === action.payload
			);

			if (index > -1) {
				state.todoslist.splice(index, 1);
			}

			//state.todoslist.pop();
		},
		toggleTodo(state, action) {
			const todo: any = state.todoslist.find(
				(todo: any) => todo.id === action.payload
			);
			if (todo) {
				todo.completed = !todo.completed;
			}
		},
	},
});

export const { addTodo, removeTodo, toggleTodo } = todosSlice.actions;
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectTodos = (state: RootState) => state.todos.todoslist;

export default todosSlice.reducer;
