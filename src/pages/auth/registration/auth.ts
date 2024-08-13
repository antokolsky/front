import { storage } from "./storage";
const auth = () => {
	class Auth {
		logOn(user: { email: string; password: string }) {
		return	fetch("http://antokolsky.ddns.net/api/auth/get_token/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					accept: "application/json",
				},
				body: JSON.stringify(user),
			})
				.then((v) => v.json())
				.then((v) => {
                   console.log("Log on");
                   
                    storage.setTokenPair(v)})
				.catch((v) => console.log(v));
		}

	async	authVerify():Promise<boolean> {
			const { access,refresh } = storage.getToken();
			if (access === null) {
				throw "access === null";
			}

		return 	fetch("http://antokolsky.ddns.net/api/auth/verify/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					accept: "application/json",
				},
				body: JSON.stringify({token:access}),
			})
				.then((v) => v.json())
				.then(() => true)
				.catch(() => false);
		}
		authRefresh() {
			const { refresh } = storage.getToken();
			
            if (refresh === null) {
				throw "refresh === null";
			}

		return	fetch("http://antokolsky.ddns.net/api/auth/verify/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					accept: "application/json",
				},
				body: JSON.stringify({ refresh }),
			})
				.then((v) => v.json())
				.then((v) => {
                    console.log("поместил в сторедж",storage);
                    
                return    storage.setTokenPair(v)})
				.catch((v) => console.log(v));
		}
	}

	return new Auth();
};
export const authPrototype = auth();
