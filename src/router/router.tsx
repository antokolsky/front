import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import { PATH } from "@/constants/router";
/* Главная страница */
import Layout from "@/pages/layout/";
import MainPage from "@/pages/main-page/main-page";
import TestPage from "@/pages/test-page/test-page";
/* Страницы авторизации */
import AuthLayout from "@/pages/auth/auth-layout";
import Authorization from "@/pages/auth/authorization/authorization";
import Registration from "@/pages/auth/registration/registration";
import ListProject from "@/pages/listProject/listProject";
import Authors from "@/pages/authors/authors";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path={PATH.MAIN.MAIN} element={<Layout />}>
				<Route element={<MainPage />} index={true} />
				<Route path={PATH.MAIN.PROJETS.PROJETS} element ={<ListProject />} />
				<Route path={PATH.MAIN.USERS.USERS} element ={<Authors />} />

			</Route>

			<Route path={PATH.AUTH.AUTH} element={<AuthLayout />}>
				<Route index={true} element={<Authorization />} />
				<Route
					path={PATH.AUTH.REGISTRATION}
					element={<Registration />} />
			</Route>
				<Route path={PATH.TEST} element={<TestPage />} />
		</Route>
	)
);
