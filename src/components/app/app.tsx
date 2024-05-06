import { Flex, Layout, Tabs, Row } from "antd";
import Model from "@/components/model";

const App = () => {
	const { Header, Footer, Content } = Layout;

	const tabs = [
		{
			key: "lq",
			label: "Low quality",
			children: <Model link="@/models/cube.stl" />,
		},
		{
			key: "hq",
			label: "Hight quality",
			children: <Model link="@/models/cube.stl" />,
		},
	];

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
					<Row style={{ maxWidth: "1000px", width: "100%" }}>
						<Tabs items={tabs} style={{ width: "100%" }} />
					</Row>
				</Content>
				<Footer></Footer>
			</Layout>
		</Flex>
	);
};

export default App;
