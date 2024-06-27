import style from "./about.module.scss";

export const About = () => {
	return (
		<div className={style.about}>
			<div className={style.content}>
				<div className={style.content__info}>
					<h1 className={style.title}>antokolsky</h1>
					<p className={style.subtitle}>
						продвижение творчества российских скульпторов за рубежом
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
