"use client";

import { useRouter } from "next/navigation";

export const ClientSideRouter = () => {
	const router = useRouter();

	const handleEnClick = () => {
		router.replace("/en");
	};
	const handleDeClick = () => {
		router.replace("/de");
	};

	return (
		<div>
			<button onClick={handleEnClick}>go EN from router</button>
			<button onClick={handleDeClick}>go DE from router</button>
		</div>
	);
};
