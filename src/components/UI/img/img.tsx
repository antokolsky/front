import {
	FC,
	PropsWithChildren,
	DetailedHTMLProps,
	ImgHTMLAttributes,
} from "react";
import cn from "classnames";
import style from "./img.module.scss";


interface Props
	extends PropsWithChildren<
        DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>

	> {
	type: "avatar"|"card";
    src:string
}

const Img: FC<Props> = (props) => {
	const {  className, type,src, ...rest } = props;

	const cstyle = cn(style[type], className);

   return (
        <img src={src} alt="Изображение" className={cstyle} onLoad={()=>{console.log(5)}} {...rest} />
   )
};

export default Img;
