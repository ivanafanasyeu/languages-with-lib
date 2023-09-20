import { useLocale, useTranslations } from "next-intl";

export const ServerComponent = () => {
	console.log(`Server render`);
	const locale = useLocale();
	const t = useTranslations("common");
	const tOther = useTranslations("other");

	return (
		<div style={{ backgroundColor: "lightpink", margin: "1rem" }}>
			Server translation to {locale}: {t("sample")}
			<p>{tOther("text")}</p>
		</div>
	);
};
