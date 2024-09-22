import style from "./registration.module.scss";
import React from "react";
import { useLazyLogTokenQuery, useUserCreatMutation } from "@/api/apiSlice";
import { useNavigate } from "react-router-dom";
import { PATH } from "@/constants/router";
import { useDispatch } from "@/hooks/store";
import { addByRemoveErrorTime } from "@/store/slices/error-slice";
import { guardError } from "@/types/guardTypes/guardError";
interface AddPostFormFields extends HTMLFormControlsCollection {
	username: HTMLInputElement;
	email: HTMLInputElement;
	password: HTMLInputElement;
}
interface AddPostFormElements extends HTMLFormElement {
	readonly elements: AddPostFormFields;
}

const Registration = () => {
	const [addNewUser] = useUserCreatMutation();
	const [logToken] = useLazyLogTokenQuery();
	
	const dispatch=useDispatch()
	const navigate=useNavigate()
	async function onRegestration(
		eventForum: React.FormEvent<AddPostFormElements>
	) {
		eventForum.preventDefault();
		const { elements } = eventForum.currentTarget;
		try {
			await addNewUser({
				email: elements.email.value,
				password: elements.password.value,
				username: elements.username.value,
			}).unwrap();
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
		<form onSubmit={onRegestration} className={style.formWrapper}>
			<input type="text" placeholder="username" name="username" />
			<input type="email" placeholder="email" name="email" />
			<input type="password" placeholder="password" name="password" />
			<input type="submit" value="регистрация" />
		</form>
	);
};

export default Registration;
