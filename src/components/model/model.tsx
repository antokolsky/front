import { FC, useRef } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import type { MeshProps } from "@react-three/fiber";
import { Mesh } from "three";

interface Props extends MeshProps {
	link: string;
	isMouseDown?: boolean;
}

const Model: FC<Props> = (props) => {
	const geometry = useLoader(STLLoader, props.link);
	const meshRef = useRef<Mesh>(null);
	const { pointer } = useThree();

	useFrame(() => {
		if (meshRef.current && props.isMouseDown) {
			meshRef.current.rotation.x = pointer.y * Math.PI;
			meshRef.current.rotation.y = pointer.x * Math.PI;
		}
	});

	return (
		<mesh
			ref={meshRef}
			castShadow
			receiveShadow
			geometry={geometry}
			position={[5, 5, 0]}
			{...props}
		>
			<meshStandardMaterial />
		</mesh>
	);
};

export default Model;
