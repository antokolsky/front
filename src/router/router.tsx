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
import { LayoutUser } from "@/pages/layoutUser/layoutUser";
import { Author } from "@/pages/author/author";
import { EditUser } from "@/pages/editUser/editUser";
import { AuthorProjects } from "@/pages/authorProjects/authorProjects";
import { CreatProject } from "@/pages/creatProject/creatProject";
import { EditProject } from "@/pages/editProject/editProject";
import { Project } from "@/pages/project/project";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path={PATH.MAIN.MAIN} element={<Layout />}>
				<Route path={PATH.MAIN.HELPER} element={<h1>Справка по загрузке странице</h1>}/>
				<Route element={<MainPage />} index={true} />
				<Route
					path={PATH.MAIN.PROJECTS.PROJECTS}
					element={<ListProject />}
				/>
				<Route path={PATH.MAIN.USERS.USERS} element={<Authors />} />

				<Route path={PATH.MAIN.USERS.USER} element={<LayoutUser />}>
					<Route element={<Author />} index={true} />
					<Route
						path={PATH.MAIN.USERS.EDITUSER}
						element={<EditUser />}
					/>

					<Route
						path={PATH.MAIN.USERS.PROJECTS.PROJECTS}
						element={<AuthorProjects />}
					/>
				</Route>

				<Route
					path={PATH.MAIN.PROJECTS.CREATPROJECT}
					element={<CreatProject />}
				/>
				<Route
					path={PATH.MAIN.PROJECTS.EDITPROJECT}
					element={<EditProject />}
				/>
				<Route
					path={PATH.MAIN.PROJECTS.PROJECT}
					element={
						<Project/>
					}
				/>
			</Route>

			<Route path={PATH.AUTH.AUTH} element={<AuthLayout />}>
				<Route index={true} element={<Authorization />} />
				<Route
					path={PATH.AUTH.REGISTRATION}
					element={<Registration />}
				/>
			</Route>
			<Route path={PATH.TEST} element={<TestPage />} />
		</Route>
	)
);
