import { Outlet } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import style from "./layout.module.scss";

const Layout = () => {
	return (
		<>
			<Header />
			<main className={style.main}>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default Layout;
