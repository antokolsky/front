import HrApp from "@/components/UI/hr/hr";
import Link from "@/components/UI/link/link";
import { PATH } from "@/constants/router";
import style from "./author.module.scss";
import Checkbox from "@/components/UI/checkbox/checkbox";

export const Author = () => {
	return (
		<div>
			<h3>Личный кабинет</h3>
			<HrApp />
			<div>
				<div>
					<p>Контактные данные</p>
					<p>
						Ознакомьтесь с инструкцией:
						<Link to={PATH.MAIN.HELPER} className={style.link}>
							Как разместить работу
						</Link>
					</p>
				</div>
				<div>
					<form action="editUser" className={style.form}>
						<label htmlFor="name">Имя</label>
						<input type="text" placeholder="Имя" name="name" />
						<label htmlFor="legalStatus">Юр статус</label>
						<select name="legalStatus">
							<option>Физическое лицо</option>
							<option>Юридическое лицо</option>
							<option>Самозанятый</option>
							<option>Индивидуальный предприниматель</option>
						</select>
                        <label htmlFor="email">Электронная почта</label>
                        <input type="email" placeholder="Почта" name="email"  />
                        <label htmlFor="whatsApp">Whats App</label>
                        <input type="text" placeholder="Whats App" name="whatsApp" />
                        <label htmlFor="telegram">Telegram</label>
                        <input type="text" placeholder="Telegram" name="telegram" />
                        <label htmlFor="telephone">Номер</label>
                        <input type="tel" name="telephone" placeholder="Номер" />
                        <label htmlFor="country">Страна</label>
                        <select name="country">
							<option>Россия</option>
							<option>Казахстан</option>
							<option>Беларусь</option>
						</select>
                        <label htmlFor="aboutMe">О себе</label>
                        <textarea name="aboutMe"  rows={10} placeholder="1000 знаков" maxLength={1000}></textarea>
                        <Checkbox color="white" idInputByLabel="anonim" label="Анонимный" />
					</form>
				</div>
			</div>
		</div>
	);
};