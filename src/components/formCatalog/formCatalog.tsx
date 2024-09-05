import cn from "classnames";
import style from "./formCatalog.module.scss";
import {
	FC,
	DetailedHTMLProps,
	HTMLAttributes,
	PropsWithChildren,
} from "react";
import GroupDropDoun from "../groupDropDown/groupDropDown";
import HrApp from "../UI/hr/hr";
import classNames from "classnames";



//TODO:Убрать в константы
const formConst = [
	{
		title: "СТИЛЬ",
		items: ["Абстрактный", "Современный", "Минимализм", "Ретро", "Будущие"],
	},
	{
		title: "ЦЕНА",
		items: [
			"до 1 000$",
			"до 2 000$",
			"до 3 000$",
			"до 4 000$",
			"до 5 000$",
		],
	},
	{
		title: "Материал",
		items: ["Сталь", "Бронза", "Керамика", "Дерево", "Камень"],
	},
];

interface Props
	extends PropsWithChildren<
		DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement>
	> {
		color:"dark"|"white"

	}

const FormCatalog: FC<Props> = (props) => {
	const { className, color, ...rest } = props;
	const formCatalogCn = cn(style.formCatalog, className);

	
	return (
		<form
			id="formCatalog"
			name="formCatalog"
			className={formCatalogCn}
			{...rest}
		>
			{formConst.map((formGrop, i) => {
				return (
					<>
					<br />

					<GroupDropDoun color={color} key={`key groupForm catalog${i}`} formGrop={formGrop}/>
					<br />
					<HrApp className={classNames(style[color])}/>
					</>
				);
			})}
		</form>
	);
};
export default FormCatalog;
