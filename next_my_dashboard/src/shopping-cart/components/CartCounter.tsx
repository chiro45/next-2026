"use client";

import { useState } from "react";

type Props = {
	value: number;
};

export const CartCounter = ({ value }: Props) => {
	const [counter, setCounter] = useState(value);

	const incrementCounter = () => setCounter((prev) => prev + 1);
	const decrementCounter = () => {
		if (counter > 0) setCounter((prev) => prev - 1);
	};

	return (
		<>
			<span className="text-9xl"> {counter}</span>
			<div className="flex gap-1">
				<button
					type="button"
					onClick={incrementCounter}
					className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all hover:cursor-pointer"
				>
					+1
				</button>

				<button
					type="button"
					onClick={decrementCounter}
					className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all hover:cursor-pointer"
				>
					-1
				</button>
			</div>
		</>
	);
};
