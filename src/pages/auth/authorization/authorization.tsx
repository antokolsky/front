import { NavLink } from "react-router-dom";
import { PATH } from "@/constants/router";
import style from "./authorization.module.scss";

const Authorization = () => {
	console.log(style);

	return (
		<div className={style.wrapper}>
			{/* <Text variant="header-1" className={style.title}>
				Авторизация
			</Text> */}
			{/* <TextInput size="l" label="email" />
			<TextInput size="l" label="password" />
			<Button size="l" view="action">
				Войти
			</Button> */}
			<NavLink to={PATH.REGISTRATION} className={style.link}>
				Зарегистрироваться
			</NavLink>
		</div>
	);
};

export default Authorization;
