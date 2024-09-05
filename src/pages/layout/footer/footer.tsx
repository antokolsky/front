import style from "./footer.module.scss"
const Footer = () => {
	return <div className={style.contanerDark}>
	
	<footer className={style.footer}>
		<div>
			<h3 className={style.headerFooter}>Хочешь работать с нами?</h3>
			<p className={style.rowMarginTopX1}>ПИШИ НА ЭТОТ EMAIL</p>
			<p className={style.rowMarginTopX1}>info@antakolsky.ru</p>
		</div>
		<div>
			<h3 className={style.headerFooter}>Хочешь сказать привет?</h3>
			<p className={style.rowMarginTopX1}>ОБРАТНАЯ СВЯЗЬ</p>
			<p className={style.rowMarginTopX1}>FAQ@antakolsky.ru</p>
		</div>
		<div>
			<h3 className={style.headerFooter}>Найдите нас в соцсетях</h3>
			<p className={style.rowMarginTopX1}>СОЦСЕТИ</p>
			<div className={[style.svgList ,style.rowMarginTopX1].join(" ")}>
				<div className={style.socialSvg}></div>
				<div className={style.socialSvg}></div>
				<div className={style.socialSvg}></div>
			</div>
		</div>
		<div>
			<h3 className={style.headerFooter}>Адрес</h3>
			<p className={style.rowMarginTopX2}>ОФИС</p>	
			<p className={style.rowMarginTopX2}>Москва</p>
			<p className={style.rowMarginTopX2}>Красногвардейская 18 к2</p>
			<p className={style.rowMarginTopX2}>125649</p>
			<p className={style.rowMarginTopX3}>+7 499 382 93 61</p>
		</div>
	</footer>
	</div>
};
export default Footer;
