import HrApp from "@/components/UI/hr/hr";
import style from "./project.module.scss";
import classNames from "classnames";
import { CaruselProject } from "@/components/caruselProject/caruselProject";
import { getData } from "@/constants/getProjectData";
import Button from "@/components/UI/button/button.tsx";
import { PATH } from "@/constants/router";
import { useNavigate } from "react-router-dom";
export const Project = () => {
	const navigate = useNavigate();
	return (
		<div className={style.wrapper}>
			<h1 className={style.heading}>Купание гипопотама</h1>
			<HrApp className={classNames(style.hrColor, style.hrHeader)} />
			<CaruselProject imgs={getData(12).map((v) => v.photos)} />
			<div className={style.marginTop}>
				<div className={style.descriptionProject}>
					<div className={style.itemDescriptionWrapper}>
						<h3 className={style.headingItemDescription}>
							О работе
						</h3>
						<p>
							Вдохновение для работы Михаила всегда была
							человеческая форма и ее драматическая поэзия. Именно
							это, вместе с его изысканными навыками, делают его
							работу такой индивидуальной, сложной и красивой.
							Михаил создает оригинальную глиняную скульптуру,
							которую он затем отливает в бронзу, уникально
							отделывая и...
						</p>
					</div>

					<div className={style.itemDescriptionWrapper}>
						<h3 className={style.headingItemDescription}>Стиль</h3>
						<p>ленд-арт класиика</p>
					</div>

					<div className={style.itemDescriptionWrapper}>
						<h3 className={style.headingItemDescription}>
							Материал
						</h3>
						<p>Керамика Металл</p>
					</div>

					<div className={style.itemDescriptionWrapper}>
						<h3 className={style.headingItemDescription}>
							Размеры
						</h3>
						<p>Ширина: Глубина: Высота:</p>
					</div>
				</div>

				<div className={style.wrapperButton}>
					<Button
						variant="x2"
						onClick={() => {
							navigate(PATH.MAIN.USERS.USER);
						}}
					>
						На страницу автора
					</Button>
					<Button variant="x2">Заказать работу</Button>
				</div>

				<div className={style.instruktionPlaceProject}>
                    
					<p> Искусство <br/>с большой буквы.</p>
					<p>Как разместить работу?</p>
					<Button
						variant="x2"
						onClick={() => navigate(PATH.MAIN.HELPER)}
					>
						Узнать подробнее
					</Button>
				</div>

                <div>
                    <p>Вам может также понравится из работ автора</p>
                    
                </div>
			</div>
		</div>
	);
};
