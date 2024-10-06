import { generatePath, NavLink } from "react-router-dom";
import style from "./header.module.scss";
import { PATH } from "@/constants/router";
import Link from "@/components/UI/link/link";
import { selectToken, logedOut } from "@/store/slices/authorization-slice";
import { useSelector, useDispatch } from "@/hooks/store";
import classNames from "classnames";
import { useGetMyUserQuery } from "@/api/apiSlice";
interface AuthorizationProps {
	token: {
		refresh: string;
		access: string;
	};
}
const Autorization = (props: AuthorizationProps) => {
	const { token } = props;
	const dispatch = useDispatch();
	const { data: dataUser, isError } = useGetMyUserQuery(token.access);

	
	return (
		<div className={style.rowAutorization}>
			<button
				onClick={() => {
					dispatch(logedOut());
				}}
				className={classNames(style.buttonExit, style.link)}
			>
				Выход
			</button>

			{isError === false && dataUser !== undefined ? (
				<>
					<span className={style.link}>|</span>
					<NavLink
						to={generatePath(PATH.MAIN.USERS.USER, {
							userId: String(dataUser.id),
						})}
						className={style.link}
					>
						Личный кабинет
					</NavLink>
				</>
			) : (
				""
			)}
		</div>
	);
};

const Header = () => {
	const token = useSelector(selectToken);

	return (
		<div className={style.darkWrapper}>
			<header className={style.header}>
				<div className={style.logo}>
					<Link to={PATH.MAIN.MAIN}>logo</Link>
				</div>
				<nav className={style.nav}>
					<ul className={style.nav__list}>
						<li>
							<NavLink
								to={PATH.MAIN.USERS.USERS}
								className={style.link}
							>
								Авторы
							</NavLink>
						</li>
						<li>
							<NavLink
								to={PATH.MAIN.PROJECTS.PROJECTS}
								className={style.link}
							>
								Скульптуры
							</NavLink>
						</li>
					</ul>
					{token !== null ? (
						<Autorization token={token} />
					) : (
						<NavLink to={PATH.AUTH.AUTH} className={style.link}>
							Вход
						</NavLink>
					)}
				</nav>
			</header>
		</div>
	);
};

export default Header;
