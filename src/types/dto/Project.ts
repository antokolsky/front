export interface Project {
	id?: number;
	name: string;
	description: string;
	cost: string;
	has_3d_model?: boolean;
	created_at?: string;
	updated_at?: string;
	photos?: string;
	owner: number;
}
