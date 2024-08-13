import About from "@/components/sections/main-page/about/about";
import AboutCards from "@/components/sections/main-page/aboutCards/aboutCards";
import MyProject from "@/components/sections/main-page/myProject/myProject";
import Projects from "@/components/sections/main-page/projects/projects";


const MainPage = () => {
	return (
		<>
			<About />
			<AboutCards/>
			<MyProject/>
			<Projects/>
		</>
	);
};

export default MainPage;
