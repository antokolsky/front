import {
	FC,
	DetailedHTMLProps,
	HTMLAttributes,
	PropsWithChildren,
} from "react";
import cn from "classnames";
import style from "./aboutCards.module.scss";
import Card from "@/components/aboutCard/aboutCard";

import GridCard from "@/components/gridCard/GridCard";
import { aboutCardsDate } from "@/constants/aboutCardsDate";

interface Props
	extends PropsWithChildren<
		DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
	> {}

const aboutCards: FC<Props> = (props) => {
	const { className, ...rest } = props;
	const darkWrapper = cn(style.darkWrapper, className);
	const gridCardWidth = cn(style.gridCardWidth);
	const headers = cn(style.headers);
	const contaner = cn(style.contaner);
	
	return (
		<div className={darkWrapper} {...rest}>
			<div className={contaner}>
				<h2 className={headers}>Подробнее о нашем сотрудничестве</h2>
				<GridCard type="about" className={gridCardWidth}>
					{aboutCardsDate.map((v,i) => {
						return <Card {...v} key={i} />;
					})}
				</GridCard>
			</div>
		</div>
	);
};
export default aboutCards;
