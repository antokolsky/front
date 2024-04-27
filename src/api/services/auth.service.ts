import type { IApi } from "@/types/api/api-types";

export default (api: IApi) => {
	api.auth = {
		login() {
			console.log("login");
		},
		logout() {
			console.log("logout");
		},
	};
};
