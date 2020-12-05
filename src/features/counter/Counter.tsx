import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Counter.module.css";

import {
	increment,
	decrement,
	incrementByAmount,
	selectCount,
} from "./counterSlice";

export interface CounterProps {}

export const Counter: React.FC<CounterProps> = ({ ...props }) => {
	const count = useSelector(selectCount);
	const dispatch = useDispatch();

	return (
		<div className={styles.row}>
			<button
				className={styles.button}
				aria-label="Increment value"
				onClick={() => dispatch(increment())}
			>
				+
			</button>
			<span className={styles.value}>{count}</span>
			<button
				className={styles.button}
				aria-label="Decrement value"
				onClick={() => dispatch(decrement())}
			>
				-
			</button>
		</div>
	);
};
