import { createBrowserRouter } from "react-router-dom";
import { PATH } from "@/constants/router";
/* Главная страница */
import Layout from "@/pages/layout/";
import MainPage from "@/pages/main-page/main-page";
import TestPage from "@/pages/test-page/test-page";
/* Страницы авторизации */
import AuthLayout from "@/pages/auth/auth-layout";
import Authorization from "@/pages/auth/authorization/authorization";

export const router = createBrowserRouter([
	{
		path: PATH.MAIN,
		element: <Layout />,
		children: [
			{
				index: true,
				element: <MainPage />,
			},
		],
	},
	{
		path: PATH.AUTH,
		element: <AuthLayout />,
		children: [
			{
				index: true,
				element: <Authorization />,
			},
		],
	},
	{
		path: PATH.TEST,
		element: <TestPage />,
	},
]);
