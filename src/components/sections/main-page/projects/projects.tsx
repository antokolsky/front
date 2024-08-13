import cn from "classnames";
import style from "./projects.module.scss";
import {
	FC,
	DetailedHTMLProps,
	HTMLAttributes,
	PropsWithChildren,
} from "react";

import ProjectsCards from "@/components/projectsCards/projectsCards";
import Button from "@/components/UI/button/button"
import Link from "@/components/UI/link/link"

import { getData } from "@/constants/getProjectData";
import { useNavigate } from "react-router-dom";
import { PATH } from "@/constants/router";
interface Props
	extends PropsWithChildren<
		DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
	> {}
const Projects: FC<Props> = (props) => {
	const navigate=useNavigate()
	const { className, ...rest } = props;
	const projectsCn = cn(style.projects, className);
	const positionButtonCn = cn(style.positionButton)
	const headerCn = cn(style.header)

	return (
		<div className={projectsCn} {...rest}>
			<h3 className={headerCn}><Link to={PATH.MAIN.PROJETS.PROJETS}>Работы авторов</Link></h3>
			<ProjectsCards data={getData(6)} type="previe" />
			{/* TODO: может перейти только если авторизован navigate(PATH.MAIN.PROFILE.CREATPROJECT)*/}
			<Button variant="x2" onClick={()=>navigate(PATH.MAIN.PROFILE.CREATPROJECT)} className={positionButtonCn}>Загрузить работу</Button>
		</div>
	);
};
export default Projects;
