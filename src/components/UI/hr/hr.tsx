import cn from 'classnames';
import style from './hr.module.scss';
import {FC,DetailedHTMLProps,HTMLAttributes,PropsWithChildren} from 'react';
interface Props extends PropsWithChildren<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> {}
const HrApp: FC<Props> = (props) => {
const {className, ...rest } = props;
const hrAppCn = cn(style.hrApp, className);
return (
<div className={hrAppCn} {...rest}>

</div>
);
};
export default HrApp;