import About from "@/components/sections/main-page/about/about";
import AboutCards from "@/components/sections/main-page/aboutCards/aboutCards";
import MyProject from "@/components/sections/main-page/myProject/myProject";
import Projects from "@/components/sections/main-page/projects/projects";
import ListAuthors from "@/components/sections/main-page/listAuthors/listAuthors";



const MainPage = () => {
	return (
		<>
			<About />
			<AboutCards/>
			<MyProject/>
			<Projects/>
			<ListAuthors />
		</>
	);
};

export default MainPage;
