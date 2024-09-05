import cn from 'classnames';
import style from './legendButtonList.module.scss';
import {FC,DetailedHTMLProps,HTMLAttributes,PropsWithChildren} from 'react';
interface Props extends PropsWithChildren<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> {
state:"open"|"close"
onState:()=>void
}

const LegendButtonList: FC<Props> = (props) => {
const { children,className,onState, state,...rest } = props;
const legendButtonListCn = cn(style.legendButtonList,style[state], className);
return (
<div  {...rest}>
    <legend className={legendButtonListCn} onClick={onState}>{children}</legend> 
</div>
);
};
export default LegendButtonList;