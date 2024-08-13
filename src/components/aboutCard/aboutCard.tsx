import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import cn from "classnames";
import Avatar from "@/components/UI/avatar/avatar";
import Icon from "@/components/UI/icon/icon";
import Button from "@/components/UI/button/button";

import style from "./aboutCard.module.scss";

interface Props
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	icon: "book" | "play" | "profile" | "ring";
	heading: string;
	about: string;
}

const aboutCard: FC<Props> = (props) => {
	const { icon, about, heading, className,...rest } = props;

	const contaner = cn(style.contaner, className);
	const headingCn = cn(style.headingCn);
	const aboutCn = cn(style.aboutCn);

	return (
		<div className={contaner} {...rest}  >
			<Avatar type="icon">
				<Icon icon={icon} />
			</Avatar>
			<div>
			<h5 className={headingCn}>
				{heading}
			</h5>

			<p className={aboutCn}>{about}</p>
			</div>
            <Button variant="x1">
                Изучить детали
            </Button>
		</div>
	);
};
export default aboutCard;
