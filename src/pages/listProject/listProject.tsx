import style from "./listProject.module.scss";
import {
	FC,
	DetailedHTMLProps,
	HTMLAttributes,
	PropsWithChildren,
} from "react";
import ProjectsCards from "@/components/projectsCards/projectsCards";
import { getData } from "@/constants/getProjectData";
import FormCatalog from "@/components/formCatalog/formCatalog";
import Pagination from "@/components/pagination/pagination";
import HrApp from "@/components/UI/hr/hr";
interface Props
	extends PropsWithChildren<
		DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
	> {}
const ListProject: FC<Props> = () => {
	



	return <div className={style.listProject} >

        <div className={style.catalogProject}>
            <FormCatalog color="dark"/>
            <ProjectsCards type={"catalog"} data={getData(9)} />
        </div>
        
        <HrApp className={style.hrMargin}/>
    
        <Pagination pages={12} className={style.pagination}/>

    </div>;
};
export default ListProject;
