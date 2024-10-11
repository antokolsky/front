import HrApp from "@/components/UI/hr/hr";
import Link from "@/components/UI/link/link";
import { PATH } from "@/constants/router";
import style from "./author.module.scss";
import avatar from "@/assets/icons/avatar.svg";
import Checkbox from "@/components/UI/checkbox/checkbox";
import classNames from "classnames";
import Button from "@/components/UI/button/button"

export const Author = () => {
	return (
		<div>
			<h3 className={style.title}>Личный кабинет</h3>
			<HrApp />
			<div className={style.wrapper}>
				<div className={style.wrapperHeader}>
					<p>Контактные данные</p>
					<p>
						Ознакомьтесь с инструкцией:{" "}
						<Link to={PATH.MAIN.HELPER} className={style.link}>
							Как разместить работу
						</Link>
					</p>
				</div>

				<div>
					<form action="editUser" className={style.form}>
						<label className={style.avatar}>
							<input type="file" name="avatar" accept="" />
							<img src={avatar} alt="аватар" />
							<label htmlFor="avatar">Имя Фамилия</label>
						</label>

						<div className={style.col}>
							<div className={style.grid}>
								<div className={style.gridLeft}>
									<div className={style.itemBox}>
										<label
											htmlFor="name"
											className={style.itemLabel}
										>
											Имя
										</label>
										<input
											type="text"
											placeholder="Имя"
											name="name"
											className={classNames(
												style.itemInput,
												style.itemInputMedium
											)}
										/>
									</div>

									<div className={style.itemBox}>
										<label
											htmlFor="legalStatus"
											className={style.itemLabel}
										>
											Юр статус
										</label>
										<select
											name="legalStatus"
											className={classNames(
												style.itemInput,
												style.itemInputMedium
											)}
										>
											<option>Физическое лицо</option>
											<option>Юридическое лицо</option>
											<option>Самозанятый</option>
											<option>
												Индивидуальный предприниматель
											</option>
										</select>
									</div>

									<div className={style.itemBox}>
										<label
											htmlFor="email"
											className={style.itemLabel}
										>
											Электронная почта
										</label>
										<input
											type="email"
											placeholder="Почта"
											name="email"
											className={classNames(
												style.itemInput,
												style.itemInputSm
											)}
										/>
									</div>

									<div className={style.itemBox}>
										<label
											htmlFor="whatsApp"
											className={style.itemLabel}
										>
											Whats App
										</label>
										<input
											type="text"
											placeholder="Whats App"
											name="whatsApp"
											className={classNames(
												style.itemInput,
												style.itemInputSm
											)}
										/>
									</div>

									<div className={style.itemBox}>
										<label
											htmlFor="telegram"
											className={style.itemLabel}
										>
											Telegram
										</label>
										<input
											type="text"
											placeholder="Telegram"
											name="telegram"
											className={classNames(
												style.itemInput,
												style.itemInputSm
											)}
										/>
									</div>

									<div className={style.itemBox}>
										<label
											htmlFor="telephone"
											className={style.itemLabel}
										>
											Номер
										</label>
										<input
											type="tel"
											name="telephone"
											placeholder="Номер"
											className={classNames(
												style.itemInput,
												style.itemInputSm
											)}
										/>
									</div>

									<div className={style.itemBox}>
										<label
											htmlFor="country"
											className={style.itemLabel}
										>
											Страна
										</label>
										<select
											name="country"
											className={classNames(
												style.itemInput,
												style.itemInputXs
											)}
										>
											<option>Россия</option>
											<option>Казахстан</option>
											<option>Беларусь</option>
										</select>
									</div>
								</div>
                                    <p className={style.gridRight}>Вы можете остаться инкогнито поставив отметку “Анонимно” . Введенная информация не будет опубликована.</p>
							</div>
							<div className={style.itemBox}>
								<label
									htmlFor="aboutMe"
									className={style.itemLabel}
								>
									О себе
								</label>
								<textarea
									name="aboutMe"
									rows={10}
									placeholder="1000 знаков"
									maxLength={1000}
									className={classNames(
										style.itemInput,
										style.itemInputBig
									)}
								/>
							</div>
                            
                            <Button variant="x2" type="submit" className={style.submit}>Сохранить</Button>

							<Checkbox
								color="white"
								idInputByLabel="anonim"
								label="Анонимный"
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
