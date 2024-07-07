/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import type { IApi, Module } from "@/types/api/api-types";
import { Auth } from "@/types/api/services";

const env = import.meta.env;

const instance = axios.create({
	baseURL: `${env.VITE_BASE_URL}${env.VITE_PROJECT}/`,
});

console.log(`${env.VITE_BASE_URL}${env.VITE_PROJECT}/`);

const registerApi = (api: IApi) => {
	const services = import.meta.glob<Module>("./services/*.service.ts", {
		eager: true,
	});

	Object.entries<Module>(services).forEach(([_path, definition]) => {
		definition.default(api);
	});
};

export class Api implements IApi {
	constructor() {
		registerApi(this);
	}

	auth = <Auth>{};
	request = instance;
}

export default new Api();
