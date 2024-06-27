import { NavLink } from "react-router-dom";
import style from "./header.module.scss";

const Header = () => {
	return (
		<header className={style.header}>
			<div className={style.logo}>logo</div>
			<nav className={style.nav}>
				<ul className={style.nav__list}>
					<li>
						<NavLink to="/test" className={style.link}>
							Авторы
						</NavLink>
					</li>
					<li>
						<NavLink to="/" className={style.link}>
							Скульптуры
						</NavLink>
					</li>
				</ul>
				<NavLink to="/" className={style.link}>
					Вход
				</NavLink>
			</nav>
		</header>
	);
};

export default Header;
