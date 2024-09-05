import cn from "classnames";
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

	columnGap:number
	rowGap:number
	sort: Project[][]
	onLoadImg: () => void
	loadImg:boolean
	refCard:(ele: HTMLDivElement | null,i:number) => void
}

const MasonryLayout: FC<Props> = (props) => {
	const { className,sort, columnGap, rowGap,onLoadImg,refCard,loadImg, ...rest } = props;

	const masonryColumnCn = cn(style.column, className);
	const masonryRowCn = cn(style.row, className);

	///скрываю элемент на время загрузки фотографии
	const visible:React.CSSProperties=loadImg?{visibility:"visible",position:"unset"}:{visibility:"hidden",position:"absolute"}
	
	return (
		<section className={masonryColumnCn} style={{columnGap:columnGap,...visible}} {...rest}>
			{sort.map((column) => {
				return <div className={masonryRowCn} style={{rowGap:rowGap}}>
					{column.map((project,i) => {
					return (
						<Card
							aboutDe={project}
							key={project.id}
							onLoadImg={onLoadImg}
							refCard={(ele)=>{refCard(ele,i)}}
						/>
					);
				})}
				</div>;
			})}
		</section>
	);
};
export default MasonryLayout;
