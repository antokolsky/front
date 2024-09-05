import cn from "classnames";
import style from "./groupDropDoun.module.scss";
import { FC, DetailedHTMLProps, PropsWithChildren, useState } from "react";
import LegendButtonList from "../UI/legend/legendButtonList";
import InputCheckbox from "@/components/UI/checkbox/checkbox";
interface FormGrop {
	title: string;
	items: string[];
}
interface Props
	extends PropsWithChildren<
		DetailedHTMLProps<
			React.FieldsetHTMLAttributes<HTMLFieldSetElement>,
			HTMLFieldSetElement
		>
	> {
	formGrop: FormGrop;
	color:"dark"|"white"

}

const formGropItem = (
	formGrop: FormGrop,
	groupActive: "close" | "open",
	view: "all" | "short",
	color:"dark"|"white"

) => {
	if (groupActive === "close") {
		return "";
	}
	if (view === "short") {
		return formGrop.items
			.map((item, i) => {
				return (
					<InputCheckbox
						key={`key item formCatalog ${i}`}
						idInputByLabel={item}
						label={item}
						color={color}
					/>
				);
			})
			.slice(0, 3);
	}
	return formGrop.items.map((item, i) => {
		return (
			<InputCheckbox
			color={color}
				key={`key item formCatalog ${i}`}
				idInputByLabel={item}
				label={item}
			/>
		);
	});
};
const GroupDropDoun: FC<Props> = (props) => {
	const { className, formGrop,color, ...rest } = props;

	const groupDropDounCn = cn(style.groupDropDoun, className);
	const spanViewCn = cn(style.spanView, className);

	const [groupActive, setGroupActive] = useState<"close" | "open">("close");
	const [view, setView] = useState<"all" | "short">("short");

	return (
		<fieldset
			style={{ display: "block" }}
			className={groupDropDounCn}
			{...rest}
		>
			<LegendButtonList
				state={groupActive}
				onState={() => {
					groupActive === "open"
						? (
                            setGroupActive("close"),
                            setView("short")
                        )
						: setGroupActive("open");
				}}
			>
				{formGrop.title}
			</LegendButtonList>
			{formGropItem(formGrop, groupActive, view,color)}
			{view==="short"&&groupActive==="open"?<span 
            className={spanViewCn}
            onClick={()=>{setView("all")}}>Смотреть больше</span>:null}
		</fieldset>
	);
};
export default GroupDropDoun;
