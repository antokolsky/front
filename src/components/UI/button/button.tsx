import {
	FC
} from "react";
import cn from "classnames";
import style from "./button.module.scss";
import {
	PropsWithChildren,
	DetailedHTMLProps,
	ButtonHTMLAttributes,
} from "react";

export interface Props
	extends PropsWithChildren<
		DetailedHTMLProps<
			ButtonHTMLAttributes<HTMLButtonElement>,
			HTMLButtonElement
		>
	> {
	variant?: "x1"|"x2";

}
const Button: FC<Props> = (props) => {
	const { children, className, type = "button",variant, ...rest } = props;
	
	const cstyle = cn(style.button,style[variant??""], className);
	return (
		<button {...rest} className={cstyle} type={type}>
			{children}
		</button>
	);
};

export default Button;
