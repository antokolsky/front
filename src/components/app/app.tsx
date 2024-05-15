import { Flex, Layout } from "antd";
import Model from "@/components/model";

const App = () => {
	const { Header, Footer, Content } = Layout;

	return (
		<Flex style={{ height: "100%" }}>
			<Layout>
				<Header></Header>
				<Content
					style={{
						display: "flex",
						justifyContent: "center",
					}}
				>
					<div style={{ maxWidth: "1000px", width: '100%', height: '100%', display: 'flex'}}>
						<div style={{ width: "50%" }}>
							<p>Model is on the right</p>
						</div>
						<div style={{ maxHeight: "500px", width: "50%", height: '50%' }}>
							<Model link="./cube.stl" />
						</div>
					</div>
				</Content>
				<Footer></Footer>
			</Layout>
		</Flex>
	);
};

export default App;
