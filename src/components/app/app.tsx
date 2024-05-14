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
					<div style={{ width: "1000px" }}>
						<Model link="./cube.stl" />
					</div>
				</Content>
				<Footer></Footer>
			</Layout>
		</Flex>
	);
};

export default App;
