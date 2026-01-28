import { CartCounter } from "@/shopping-cart/components";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Shopping Cart",
	description: "A Simple Counter",
};

export default function CounterPage() {
	return (
		<div className="flex flex-col items-center justify-center w-full h-full">
			<span> Productos en el carrito</span>
			<CartCounter value={20} />
		</div>
	);
}
