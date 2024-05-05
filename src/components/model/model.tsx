import { FC } from "react";
import { useLoader, useThree } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import type { MeshProps } from "@react-three/fiber";

interface Props extends MeshProps {
	link: string;
}

const Model: FC<Props> = (props) => {
	const geometry = useLoader(STLLoader, props.link);

	const three = useThree();
	three.size = { width: 1000, height: 700, top: 0, left: 0 };

	return (
		<mesh castShadow receiveShadow geometry={geometry} {...props}>
			<meshStandardMaterial />
		</mesh>
	);
};

export default Model;
