import { FC, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import Model from "./model";
import { SpotLight } from "three";

interface Props {
	link: string;
}

const light = new SpotLight();
light.intensity = 100;
light.angle = Math.PI / 4;
light.penumbra = 1;
light.castShadow = true;
light.shadow;

export const ModelWrapper: FC<Props> = (props) => {
	return (
		<Suspense fallback={<h2>🌀 Loading...</h2>}>
			<Canvas
				/* camera={{ position: [6, 4, 8], fov: 35 }} */
				onCreated={({ camera, scene }) => {
					light.position.set(
						camera.position.x,
						camera.position.y,
						camera.position.z
					);
					camera.add(light);
					scene.add(camera);
					console.log("init light", light.position);
					console.log("init camera", camera.position);
				}}
			>
				<color attach="background" args={["#d0d0d0"]} />
				<Center top>
					<Model
						scale={0.05}
						rotation={[-Math.PI / 2, 0, 0]}
						link={props.link}
					/>
				</Center>
				<OrbitControls makeDefault />
			</Canvas>
		</Suspense>
	);
};
