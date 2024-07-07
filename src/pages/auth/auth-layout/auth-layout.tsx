import { Outlet } from "react-router-dom";
import style from "./auth-layout.module.scss";

const AuthLayout = () => {
	return (
		<div className={style.wrapper}>
			<Outlet />
		</div>
	);
};

export default AuthLayout;
