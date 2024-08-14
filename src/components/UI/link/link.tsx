import cn from "classnames";
import style from "./link.module.scss";
import { FC, ComponentProps } from "react";
import { Link as LinkRoute } from "react-router-dom";
interface Props extends ComponentProps<typeof LinkRoute> {}
const Link: FC<Props> = (props) => {
	const {  children,to, className, ...rest } = props;
	const linkCn = cn(style.link, className);
	return <LinkRoute to={to} className={linkCn} {...rest}>{children}</LinkRoute>;

};
export default Link;
