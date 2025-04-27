"use client";
import styles from './Counter.module.css';
import { useState } from 'react';
function Counter({dataValue, onChange}){
	const [count, setCount] = useState(dataValue);
	return(
		<div className={`${styles.counter__holder} inline-flex items-center justify-center relative`}>
			<button className={`${styles.counter__minus} base__color absolute outline-none`} onClick={() => {
				if((count - 1) === 0) return false;
				setCount(count - 1);
				onChange(count - 1);
			}}>-</button>
			{count}
			<button className={`${styles.counter__plus} base__color absolute outline-none`} onClick={() => {
				setCount(count + 1);
				onChange(count + 1);
			}}>+</button>
		</div>
	)
};
export default Counter;