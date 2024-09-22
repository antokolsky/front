import style from "./errorList.module.scss";
import { selectErrors, removeError } from "@/store/slices/error-slice";
import { useDispatch, useSelector } from "@/hooks/store";
import clouseSvg from "@/assets/icons/close-svg.svg";
export const ErrorList = () => {
	const errors = useSelector(selectErrors);
	console.log(errors);

	const dipatch = useDispatch();
	return (
		<div className={style.wrapper}>
			{errors.map((error) => (
				<div className={style.errorWrapper}>
                    <img src={clouseSvg} className={style.clouseSvg} onClick={()=>dipatch(removeError(error.id))}/>
					<p>{error.data}</p>
				</div>
			))}
		</div>
	);
};
