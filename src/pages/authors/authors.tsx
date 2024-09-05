import FormCatalog from "@/components/formCatalog/formCatalog"
import ListAvatar from "@/components/listAvatar/listAvatar"
import HrApp from "@/components/UI/hr/hr"
import { getAuthors } from "@/constants/getProjectData"
import style from "./authors.module.scss"
import Pagination from "@/components/pagination/pagination"
const Authors=()=>{
    return <div className={style.darkBack}>
     <div className={style.contaner} > 
        <h1 className={style.headengH1Color}>Antakolsky 2024 сообщество скульпторов</h1>
        <HrApp className={style.hrSand} />
    <div className={style.catalog}>
        <div className={style.fromContaner}>
            <p className={style.color}>Главная / Авторы</p>
            <h2 className={style.color}>Аторы</h2>
        <FormCatalog color="white" className={style.formColor} />
        </div>
        <ListAvatar className={style.columnsGrid} avatars={getAuthors(6).map(v=>{return {...v,description:"Скульптор (бронза, дерево)"}})}/>

    </div>
    <Pagination  className={style.pagination} pages={8}/>
    <HrApp className={style.hrSand} />
    </div>
    </div>
}
export default Authors