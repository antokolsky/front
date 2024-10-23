import style from "./masonryLayout.module.scss";
import {
	FC,
	DetailedHTMLProps,
	HTMLAttributes,
	PropsWithChildren,
} from "react";
import { Project } from "@/types/dto";
import Card from "@/components/projectCard/projectCard";
interface Props
	extends PropsWithChildren<
		DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
	> {

	
	data: Project[];
}

const MasonryLayout: FC<Props> = (props) => {
	const { data,...rest } = props;

	return (
		<div className={style.mansory} {...rest}>
			
					{data.map((project) => {
					return (
						<Card
							aboutDe={project}
							key={project.id}
							
						/>
					);
				})}
			
		</div>
	);
};
export default MasonryLayout;
