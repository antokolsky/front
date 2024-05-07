import "@utils/localization/i18next";
import { useTranslation } from "react-i18next";

const languages = {
	en: "English",
	ru: "Russian",
};

const App = () => {
	const { t, i18n } = useTranslation();

	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
			<h1>{t("textHello")}</h1>
			<div style={{ display: "flex", gap: "10px" }}>
				{Object.entries(languages).map(([lng, name]) => (
					<button
						key={lng}
						onClick={() => i18n.changeLanguage(lng)}
						disabled={i18n.language === lng}
					>
						{name}
					</button>
				))}
			</div>
			<p>{t("text")}</p>
			<div style={{ display: "flex", gap: "10px" }}>
				<button>{t("buttonOk")}</button>
				<button>{t("buttonCancel")}</button>
			</div>
		</div>
	);
};

export default App;
