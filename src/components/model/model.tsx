import { FC } from "react";
import { useLoader } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import type { MeshProps } from "@react-three/fiber";

interface Props extends MeshProps {
	link: string;
}

const Model: FC<Props> = (props) => {
	const geometry = useLoader(STLLoader, props.link);

	return (
		<mesh castShadow receiveShadow geometry={geometry} {...props}>
			<meshStandardMaterial />
		</mesh>
	);
};

export default Model;
