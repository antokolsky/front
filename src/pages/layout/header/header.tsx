import { NavLink } from "react-router-dom";
import style from "./header.module.scss";
import { PATH } from "@/constants/router";
import Link from "@/components/UI/link/link";

const Header = () => {
	return (
		<div className={style.darkWrapper}>
			<header className={style.header}>
				<div className={style.logo}><Link to={PATH.MAIN.MAIN}>logo</Link></div>
				<nav className={style.nav}>
					<ul className={style.nav__list}>
						<li>
							<NavLink to={PATH.MAIN.USERS.USERS} className={style.link}>
								Авторы
							</NavLink>
						</li>
						<li>
							<NavLink to={PATH.MAIN.PROJETS.PROJETS} className={style.link}>
								Скульптуры
							</NavLink>
						</li>
					</ul>
					<NavLink to={PATH.AUTH.AUTH} className={style.link}>
						Вход
					</NavLink>
				</nav>
			</header>
		</div>
	);
};

export default Header;
