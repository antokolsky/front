import cn from "classnames";

import style from "./projectsCards.module.scss";
import {
	DetailedHTMLProps,
	FC,
	HTMLAttributes,
	PropsWithChildren,
	
} from "react";

import type { Project } from "@/types/dto";

interface Props
	extends PropsWithChildren<
		DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
	> {
	type: "previe" | "catalog";
	data: Project[];
}
import MasonryLayout from "../masonryLayout/masonryLayout";

///отоброжаем элемент расчитываем высоту, сорти
const ProjectsCards: FC<Props> = (props) => {
	const { data, type, className, ...rest } = props;
	const projectsCardsCn = cn(style[type], className);



		
	
		
			
	

	return (
		<div className={projectsCardsCn} {...rest}>
			
			
				
			<MasonryLayout  data={data}   />
				
		</div>
	);
};
export default ProjectsCards;
