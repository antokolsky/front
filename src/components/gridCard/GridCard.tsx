import {
	FC,
	PropsWithChildren,
	DetailedHTMLProps,
	HTMLAttributes,
} from "react";
import cn from "classnames";
import style from "./gridCard.module.scss";
interface Props
	extends PropsWithChildren<
		DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
	> {
	type: "about" | "project";
}

const GridCard: FC<Props> = (props) => {
	const { children, type, className,...rest } = props;
	const cgrid = cn(style.gridCard, style[type], className);
	return <div  className={cgrid} {...rest}>{children}</ div>;
};

export default GridCard;
