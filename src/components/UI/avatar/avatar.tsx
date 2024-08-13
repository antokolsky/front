import {
	FC,
	PropsWithChildren,
	DetailedHTMLProps,
	HTMLAttributes,
} from "react";
import cn from "classnames";
import style from "./avatar.module.scss";

interface Props
	extends PropsWithChildren<
		DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
	> {
	type: "icon" | "img";
}

const Avatar: FC<Props> = (props) => {
	const { children, className, type, ...rest } = props;

	const cstyle = cn(style.avatar, style[type], className);

  
        return (
			<div className={cstyle} {...rest}>
				{children}
			</div>
		);
    
};

export default Avatar;
