import { useCallback, useState } from "react";
import style from "./caruselProject.module.scss";
import { createPortal } from "react-dom";
import clouseModalSVG from "@/assets/icons/close-svg.svg";
import classNames from "classnames";

interface PropsZoomImages {
	img: string | undefined;
}

interface PropsCarusel {
	imgs: (string | undefined)[];
}
export const CaruselProject = (props: PropsCarusel) => {
	const { imgs } = props;

	const [currentIndexCarusel, setCurrentIndexCarusel] = useState(0);
	const [currentIndexPaginationCarusel, setCurrentIndexPaginationCarusel] =
		useState(0);
	const [boxPaginationCarusel, setBoxPaginationCarusel] = useState(0);
	const [paginationCarusel, setPaginationCarusel] = useState(0);


	const [showModal, setShowModal] = useState(false);

	const refBoxPaginationCarusel = useCallback((node: Element | null) => {
		if (!node) return;
		const resizeObserver = new ResizeObserver(() => {
			// Do what you want to do when the size of the element changes
			
			setBoxPaginationCarusel(node.clientWidth)
		});
		resizeObserver.observe(node);
	}, []);

	const refPaginationCarusel = useCallback((node: Element | null) => {
		if (!node) return;
		const resizeObserver = new ResizeObserver(() => {
			// Do what you want to do when the size of the element changes

			setPaginationCarusel(node.scrollWidth);
		});
		resizeObserver.observe(node);
	}, []);

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
						className={classNames(style.buttonCarusel,style.caruselLeftVector)}
						onClick={() => {
							setCurrentIndexCarusel(currentIndexCarusel - 1);
						}}
					/>
				)}
				<div className={style.wrapperCarusel}>
					<div
						className={style.carusel}
						style={{
							transform: `translateX(-${
								currentIndexCarusel * 100
							}%)`,
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
						className={classNames(style.buttonCarusel,style.caruselRightVector)}
						onClick={() => {
							setCurrentIndexCarusel(currentIndexCarusel + 1);
						}}
					/>
				)}
				<div
					className={classNames(style.buttonCarusel,style.caruselZoomVector)}
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
				{currentIndexPaginationCarusel !== 0 && (
					<div
						className={classNames(style.buttonCarusel,style.caruselPaginationLeftVector)}
						onClick={() => {
							setCurrentIndexPaginationCarusel(
								currentIndexPaginationCarusel - 1
							);
						}}
					/>
				)}{" "}
				<div 
				ref={(el)=>refBoxPaginationCarusel(el)}
				className={style.wrapperPaginationCarusel}>
					<div
						ref={(el) => refPaginationCarusel(el)}
						className={style.paginationCarusel}
						style={{
							transform: `translateX(-${
								currentIndexPaginationCarusel * 100
							}%)`,
						}}
					>
						{imgs.map((v,i) => (
							<img src={v} onClick={()=>{setCurrentIndexCarusel(i)}} />
						))}
					</div>
				</div>
				{(currentIndexPaginationCarusel<Math.floor(paginationCarusel/boxPaginationCarusel)) && (
					<div
						className={classNames(style.buttonCarusel,style.caruselPaginationRightVector)}
						onClick={() => {
							setCurrentIndexPaginationCarusel(
								currentIndexPaginationCarusel + 1
							);
						}}
					/>
				)}{" "}
			</div>
		</div>
	);
};
