import Img from "@/components/UI/img/img";
import style from "./projectCard.module.scss";
import cn from "classnames";
import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";
import {Project} from "@/types/dto/Project"
import { generatePath } from "react-router-dom";
import { PATH } from "@/constants/router";
import Link from "@/components/UI/link/link"

interface Props
	extends PropsWithChildren<
		DetailedHTMLProps<
			HTMLAttributes<HTMLDivElement>,
			HTMLDivElement
		>
	> {
	aboutDe: Project
	refCard:(ele:HTMLDivElement|null) =>void
	onLoadImg:()=>void
}

const ProjectCard = (props: Props) => {
	const { aboutDe, className,onLoadImg,refCard ,...rest } = props;
	const cstyle = cn(style.card, className);
    const contaner=cn(style.contaner)
    const typograph=cn(style.typograph)
    const pathUser=generatePath(PATH.MAIN.PROJECTS.PROJECT,{projectId:String(aboutDe.id)})



	return (
		<div className={cstyle} ref={refCard}   {...rest}>

		{/* TODO: Если фото не сделают обязательным сделать скелет временое решение aboutDe.photos??"" */}
				
				<Img   src={aboutDe.photos??""} type="card" onLoad={onLoadImg}/>
			
            <div  className={contaner}>
                <h5 className={typograph}><Link to={pathUser}>{aboutDe.name}</Link></h5>
                <p className={typograph}>{aboutDe.description.slice(30)}</p>
                <p className={typograph}>{aboutDe.cost}</p>
            </div>
		</div>
	);
};
export default ProjectCard;
