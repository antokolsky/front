import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

const Layout = () => {
	return (
		<>
			<Header />
			<main id="main-content">
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default Layout;
