import { useState } from "react";
import style from "./caruselProject.module.scss";
import { createPortal } from "react-dom";
import clouseModalSVG from "@/assets/icons/close-svg.svg";

interface PropsZoomImages {
	img: string | undefined;
}

interface PropsCarusel {
	imgs: (string | undefined)[];
}
export const CaruselProject = (props: PropsCarusel) => {
	const { imgs } = props;

	const [currentIndexCarusel, setCurrentIndexCarusel] = useState(0);
	const [currentIndexPaginationCarusel, setCurrentIndexPaginationCarusel] = useState(0);

	const [showModal, setShowModal] = useState(false);

	const ZoomImages = ({ img }: PropsZoomImages) => {
		return (
			<div
				className={style.zoomImageWrapper}
				onClick={() => {
					setShowModal(false);
				}}
			>
				<img
					src={clouseModalSVG}
					className={style.clouseModal}
					onClick={() => {
						setShowModal(false);
					}}
				/>
				<img
					src={img}
					onClick={(event) => {
						event.stopPropagation();
					}}
				/>
			</div>
		);
	};
	return (
		<div className={style.box}>
			<div className={style.wrapper}>
				{currentIndexCarusel !== 0 && (
					<div
						className={style.caruselLeftVector}
						onClick={() => {
							setCurrentIndexCarusel(currentIndexCarusel - 1);
						}}
					/>
				)}
				<div className={style.wrapperCarusel}>
					<div
						className={style.carusel}
						style={{
							transform: `translateX(-${currentIndexCarusel * 100}%)`,
						}}
					>
						{imgs.map((v) => (
							<div className={style.boxImg}>
								<img src={v} className={style.img} />
							</div>
						))}
					</div>
				</div>

				{currentIndexCarusel !== imgs.length - 1 && (
					<div
						className={style.caruselRightVector}
						onClick={() => {
							setCurrentIndexCarusel(currentIndexCarusel + 1);
						}}
					/>
				)}
				<div
					className={style.caruselZoomVector}
					onClick={() => {
						setShowModal(true);
					}}
				/>
				{showModal &&
					createPortal(
						<ZoomImages img={imgs[currentIndexCarusel]} />,
						document.body
					)}
			</div>
			<div className={style.boxCaruselPagination}>
{currentIndexPaginationCarusel!==0&&<div className={style.caruselPaginationLeftVector}  onClick={()=>{setCurrentIndexPaginationCarusel(currentIndexPaginationCarusel-1)}}/>}				<div className={style.wrapperPaginationCarusel} >
					<div className={style.paginationCarusel} style={{
							transform: `translateX(-${currentIndexPaginationCarusel * 100}%)`,
						}}>
						{imgs.map((v) => (
							<img src={v} />
						))}
					</div>
				</div>
{currentIndexPaginationCarusel!==imgs.length-1&&<div className={style.caruselPaginationRightVector} onClick={()=>{setCurrentIndexPaginationCarusel(currentIndexPaginationCarusel+1)}}/>}	</div>
		</div>
	);
};
