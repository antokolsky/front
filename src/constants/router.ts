/**
 * Маршруты роута
 */
export const PATH = {
	/**
	 * Главная страница: "/"
	 */
	MAIN: {
		MAIN: "/",
		USERS: {
			USERS:"/users",
			USER: "/users/:userId",
			MYPROJECTS: "/users/:userId/myProjects",
			CREATPROJECT: "/users/:userId/myProjects/creatProject"
		},
		PROJETS: { 
			PROJETS: "/projects",
			PROJECT: "/projects/:projectId"
		},
		AUTHORS: "/authors",
	},

	/**
	 * Страница авторизации: "/auth"
	 */
	AUTH: {
		AUTH:"/auth",
		
		/**
	 * Страница регистрации: "/registration"
	 */
		REGISTRATION: "/auth/registration"

	},

	
	/**
	 * Страница для отладки компонентов: "/test"
	 */
	TEST: "/test",
} as const;
