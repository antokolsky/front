import { TextInput, Button, Text } from "@gravity-ui/uikit";
import style from "./authorization.module.scss";

const Authorization = () => {
	return (
		<div className={style.wrapper}>
			<Text variant="header-1" className={style.title}>
				Авторизация
			</Text>
			<TextInput size="l" label="email" />
			<TextInput size="l" label="password" />
			<Button size="l" view="action">
				Войти
			</Button>
		</div>
	);
};

export default Authorization;
