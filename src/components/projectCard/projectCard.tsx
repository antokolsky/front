import Img from "@/components/UI/img/img";
import style from "./projectCard.module.scss";
import cn from "classnames";
import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";
import {Project} from "@/types/dto/Project"


interface Props
	extends PropsWithChildren<
		DetailedHTMLProps<
			HTMLAttributes<HTMLDivElement>,
			HTMLDivElement
		>
	> {
	aboutDe: Project
}

const projectCard = (props: Props) => {
	const { aboutDe, className, ...rest } = props;
	const cstyle = cn(style.card, className);
    const contaner=cn(style.contaner)
    const typograph=cn(style.typograph)
	return (
		<div  className={cstyle}  {...rest}>

		{/* TODO: Если фото не сделают обязательным сделать скелет временое решение aboutDe.photos??"" */}
			<Img src={aboutDe.photos??""} type="card" />
            <div className={contaner}>
                <h5 className={typograph}>{aboutDe.name}</h5>
                <p className={typograph}>{aboutDe.description.slice(30)}</p>
                <p className={typograph}>{aboutDe.cost}</p>
            </div>
		</div>
	);
};
export default projectCard;
