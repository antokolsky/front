
import { useLazyLogTokenQuery } from "@/api/apiSlice";
import style from "./authorization.module.scss";
import { PATH } from "@/constants/router";
import { useNavigate } from "react-router-dom";
import { guardError } from "@/types/guardTypes/guardError";
import { addByRemoveErrorTime } from "@/store/slices/error-slice";
import { useDispatch } from "@/hooks/store";

interface AddPostFormFields extends HTMLFormControlsCollection {
	email: HTMLInputElement;
	password: HTMLInputElement;
}
interface AddPostFormElements extends HTMLFormElement {
	readonly elements: AddPostFormFields;
}


const Authorization = () => {
	const [logToken] = useLazyLogTokenQuery();
	const dispatch=useDispatch()

	const navigate=useNavigate()

	async function onAuthorization(
		eventForum: React.FormEvent<AddPostFormElements>
	) {
		eventForum.preventDefault();
		const { elements } = eventForum.currentTarget;
		try {
			
			await logToken({
				email: elements.email.value,
				password: elements.password.value,
			}).unwrap();
			
			navigate(PATH.MAIN.MAIN)
		} catch (axiosError) {
			if(guardError(axiosError)){
				const err = axiosError 
				dispatch(addByRemoveErrorTime(JSON.stringify(err.data)))
				}
		}
	}

	return (
		<form className={style.formWrapper} onSubmit={onAuthorization}>
				<input type="email" placeholder="email" name="email" />
				<input type="password" placeholder="password" name="password" />
				<input type="submit" value="Войти" />
			
		</form>
	);
};

export default Authorization;
