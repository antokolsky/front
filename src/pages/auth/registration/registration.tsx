import { TextInput, Button, Text } from "@gravity-ui/uikit";
import style from "./registration.module.scss";

const Registration = () => {
	return (
		<div className={style.wrapper}>
			<Text variant="header-1" className={style.title}>
				Регистрация
			</Text>
			<TextInput size="l" label="username" />
			<TextInput size="l" label="email" />
			<TextInput size="l" label="password" />
			<Button size="l" view="action">
				Зарегистрироваться
			</Button>
		</div>
	);
};

export default Registration;
