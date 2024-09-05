import cn from "classnames";
import style from "./checkbox.module.scss";
import {
	FC,
	DetailedHTMLProps,
	HTMLAttributes,
	PropsWithChildren,
} from "react";
interface Props
	extends PropsWithChildren<
		DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
	> {
        idInputByLabel:string
      
        label:string
		color:"dark"|"white"
    }
const Checkbox: FC<Props> = (props) => {
	const { className,idInputByLabel,label,color, ...rest } = props;
	const contanerCn = cn(style.contanerCn, className);
	const inputClassCn = cn(style.customCheckbox,style[color]);
    const labelClassCn=cn(style.label)

	return (
		<div className={contanerCn} {...rest}>
			<input
				type="checkbox"
				name={idInputByLabel}
				id={idInputByLabel}
				className={inputClassCn}
			/>
			<label htmlFor={idInputByLabel} className={labelClassCn}>{label}</label>
		</div>
	);
};
export default Checkbox;
