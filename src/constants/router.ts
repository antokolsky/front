/**
 * Маршруты роута
 */
export const PATH = {
	MAIN: {
		/**
		 * Главная страница: "/"
		 */
		MAIN: "/",
		/**Страница Справка "/helper"*/
		HELPER:"/helper",
		USERS: {
			/**
			 * Страница авторов: "/users"
			 */
			USERS: "/users",
			/**
			 * Страница автора: "/users/:userId"
			 */
			USER: "/users/:userId",
			/**
			 * Страница изменения автора: "/users/:userId/editUser"
			 */
			EDITUSER: "/users/:userId/editUser",
			PROJECTS: {
				/**
				 * Страница моих проектов: "/users/:userId/projects"
				 */
				PROJECTS: "/users/:userId/projects",
			},
		},
		PROJECTS: {
			PROJECTS: "/projects",
			PROJECT: "/projects/:projectId",
			/**
			 * Страница изменения проекта: "/users/:userId/projects/:projectId/editProject"
			 */
			EDITPROJECT: "/projects/:projectId/editProject",
			/**
			 * Страница создания проекта: "/users/:userId/projects/creatProject"
			 */
			CREATPROJECT: "/projects/creatProject",
		},
	},

	/**
	 * Страница авторизации: "/auth"
	 */
	AUTH: {
		AUTH: "/auth",
		/**
		 * Страница регистрации: "/registration"
		 */
		REGISTRATION: "/auth/registration",
	},

	/**
	 * Страница для отладки компонентов: "/test"
	 */
	TEST: "/test",
} as const;
