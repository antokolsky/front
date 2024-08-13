// import Model from "@/components/model";

import Cards from "@/components/projectsCards/projectsCards.tsx";

import { getData } from "@/constants/getProjectData";

const TestPage = () => {
	

	return (
		<div style={{ margin: "0", width: "1920px" ,backgroundColor:"white"}}>
		<Cards type={"catalog"} data={getData(12)} />
				
		</div>
	);
};
		
export default TestPage;
