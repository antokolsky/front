import cn from "classnames";

import style from "./projectsCards.module.scss";
import {
	DetailedHTMLProps,
	FC,
	HTMLAttributes,
	PropsWithChildren,
	useCallback,
	useLayoutEffect,
	useRef,
	useState,
} from "react";
import { sortMasonry } from "../masonryLayout/sortMasonry";

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

	const cardsRef = useRef<HTMLDivElement[]>([]);
	const [sort,stateSort]=useState<Project[][]>([data])
	const [loadImg,stateLoadImg]=useState(false)

	const addToRefs = useCallback(
		(el: HTMLDivElement | null, index: number) => {
			if (!el || cardsRef.current.includes(el)) return;
			cardsRef.current.splice(index, 0, el);
		},
		[cardsRef]
	);

	useLayoutEffect(()=>{

		if(loadImg){
		const cardsHeyght=cardsRef.current.map(v=>v.clientHeight)

		const sorted = sortMasonry(data,cardsHeyght,3)

		stateSort(sorted)}
	
		
			
	},[loadImg])

	return (
		<div className={projectsCardsCn} {...rest}>
			
			
				
			<MasonryLayout  rowGap={20} columnGap={20} sort={sort} onLoadImg={()=>{stateLoadImg(true)}} refCard={(ele,i) => {addToRefs(ele, i)}} loadImg={loadImg} />
				
		</div>
	);
};
export default ProjectsCards;
