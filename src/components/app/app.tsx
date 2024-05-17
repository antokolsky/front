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
					<div style={{ maxWidth: "1000px", width: '100%', height: '100%', display: 'flex', gap: '1rem'}}>
					<div style={{ maxHeight: "500px", width: "50%", height: '50%' }}>
							<Model link="./cube.stl" />
						</div>
						<div style={{ maxHeight: "500px", width: "50%", height: '50%' }}>
							<Model link="./cube.stl" rotateModel/>
						</div>
					</div>
				</Content>
				<Footer></Footer>
			</Layout>
		</Flex>
	);
};

export default App;
