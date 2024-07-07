export interface CustomUser {
	id?: number;
	password: string;
	last_login?: string;
	is_superuser?: boolean;
	username: string;
	first_name?: string;
	last_name?: string;
	is_staff?: boolean;
	is_active?: boolean;
	date_joined?: string;
	email: string;
	groups?: number[];
	user_permissions?: number[];
}
