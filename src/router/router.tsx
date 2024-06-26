import { createBrowserRouter } from "react-router-dom";
import { PATH } from "@/constants/router";
import Layout from "@/pages/layout/layout";
import MainPage from "@/pages/main-page/main-page";

import TestPage from "@/pages/test-page/test-page";

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
		path: PATH.TEST,
		element: <TestPage />,
	},
]);
