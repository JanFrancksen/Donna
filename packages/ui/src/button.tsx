"use client";

import { ReactNode } from "react";

interface ButtonProps {
	children: ReactNode;
	className?: string;
}

export const Button = ({ children }: ButtonProps) => {
	return (
		<button
			type="button"
			className="bg-red-400 hover:bg-red-500"
			onClick={() => {
				alert("Hallo");
			}}
		>
			{children}
		</button>
	);
};
