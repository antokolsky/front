import { FC, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
	Center,
	OrbitControls,
	AccumulativeShadows,
	RandomizedLight,
} from "@react-three/drei";
import Model from "./model";

interface Props {
	link: string;
}

export const ModelWrapper: FC<Props> = (props) => {
	return (
		<Suspense fallback={<h2>🌀 Loading...</h2>}>
			<Canvas shadows camera={{ position: [6, 4, 8], fov: 35 }}>
				<color attach="background" args={["#d0d0d0"]} />
				<ambientLight intensity={0.25} />
				<spotLight
					intensity={100}
					position={[-5, 5, 5]}
					angle={Math.PI / 4}
					penumbra={1}
					castShadow
					shadow-mapSize={1024}
				/>
				<Center top>
					<Model
						scale={0.05}
						rotation={[-Math.PI / 2, 0, 0]}
						link={props.link}
					/>
				</Center>
				<AccumulativeShadows temporal frames={100}>
					<RandomizedLight radius={6} position={[-10, 5, 5]} />
				</AccumulativeShadows>
				<OrbitControls makeDefault />
			</Canvas>
		</Suspense>
	);
};
