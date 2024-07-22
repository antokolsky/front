import { FC, SVGProps } from "react";
import { icons } from "@/assets/icons";

interface Props extends SVGProps<SVGSVGElement> {
	icon: keyof typeof icons;
}

const Icon: FC<Props> = (props) => {
	const { icon, ...rest } = props;
	const CurrentIcon = icons[icon];

	return <CurrentIcon {...rest} />;
};

export default Icon;
