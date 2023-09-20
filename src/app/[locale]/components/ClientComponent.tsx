"use client";
import { useLocale, useTranslations } from "next-intl";
import { useEffect } from "react";

export const ClientComponent = () => {
	useEffect(() => {
		console.log("effect");
	}, []);

	console.log("Render client");

	const locale = useLocale();
	const t = useTranslations("common");
	const tOther = useTranslations("other");

	return (
		<div style={{ backgroundColor: "lightblue", margin: "1rem" }}>
			Client translated to {locale}: {t("sample")}
			<p>{tOther("text")}</p>
		</div>
	);
};
