import Card from "@/components/projectCard/projectCard";
import GridCard from "@/components/gridCard/GridCard";
import cn from "classnames";

import style from "./projectsCards.module.scss";
import {
	DetailedHTMLProps,
	FC,
	HTMLAttributes,
	PropsWithChildren,
} from "react";
import { Project } from "@/types/dto";

interface Props
	extends PropsWithChildren<
		DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
	> {
		type:"previe"|"catalog"
		data:Project[] }

const projectsCards: FC<Props> = (props) => {
	const { data, type,className, ...rest } = props;
	const projectsCardsCn = cn(style[type], className);
	const gridCn = cn(style.grid);

	return (
		<div className={projectsCardsCn} {...rest}>
			<GridCard type="project" className={gridCn}>
				{data.map((project) => {
					return <Card aboutDe={project} key={project.id} />;
				})}
			</GridCard>
		</div>
	);
};
export default projectsCards;
