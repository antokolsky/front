import {
	FC,
	PropsWithChildren,
	DetailedHTMLProps,
	ButtonHTMLAttributes,
} from "react";
import cn from "classnames";
import style from "./button.module.scss";

interface Props
	extends PropsWithChildren<
		DetailedHTMLProps<
			ButtonHTMLAttributes<HTMLButtonElement>,
			HTMLButtonElement
		>
	> {
	variant?: "dark";
	size?: "xl";
}

const Button: FC<Props> = (props) => {
	const { children, className, type = "button", ...rest } = props;

	const cstyle = cn(style.button, className);
	return (
		<button {...rest} className={cstyle} type={type}>
			{children}
		</button>
	);
};

export default Button;
