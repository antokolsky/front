
import { authPrototype } from "./auth";
import style from "./registration.module.scss";
import { storage } from "./storage";






async function logOn(){
	const dataF={email:"test@mail.ru",password:"gasangazik123AR"}
	await	authPrototype.logOn(dataF)
	const boolen= await authPrototype.authVerify()
	if(!boolen){
		await	authPrototype.authRefresh()
	}
	
	fetch("http://antokolsky.ddns.net/api/russian/users/me/", {
		method: "GET",
		headers: {
			Authorization:` Bearer ${storage.getToken().access}`,
			"Content-Type": "application/json",
			accept: "application/json",
		}
	}).then(v=>v.json()).then(v=>console.log(v)).catch(v=>console.log(v))

}
const Registration = () => {
	logOn()


	return (
		<div className={style.wrapper}>
			{/* <Text variant="header-1" className={style.title}>
				Регистрация
			</Text>
			<TextInput size="l" label="username" />
			<TextInput size="l" label="email" />
			<TextInput size="l" label="password" />
			<Button size="l" view="action">
				Зарегистрироваться
			</Button> */}
		</div>
	);
};

export default Registration;
