import { NavLink, Outlet } from "react-router-dom";
import style from "./auth-layout.module.scss";
import { PATH } from "@/constants/router";
import classNames from "classnames";

const AuthLayout = () => {
	return (
		<div className={style.wrapper}>
			<div className={style.formWrapper}>
				<div className={style.navWrapper}>
				<NavLink
					to={PATH.AUTH.AUTH}
					end={true}
					className={({ isActive }) => {
						const state = isActive
							? style.actionLink
							: style.noAction;
						return classNames( style.navLink,state);
					}}
				>
					Войти
				</NavLink>
				<NavLink
					to={PATH.AUTH.REGISTRATION}
					className={({ isActive }) => {
						const state = isActive
							? style.actionLink
							: style.noAction;
						return classNames(state, style.navLink);
					}}
				>
					Зарегистрироваться
				</NavLink>
				</div>
				<Outlet />
			</div>
		</div>
	);
};

export default AuthLayout;
