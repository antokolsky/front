import HrApp from "@/components/UI/hr/hr"
import style from "./project.module.scss"
import classNames from "classnames"
import { CaruselProject } from "@/components/caruselProject/caruselProject"
import { getData } from "@/constants/getProjectData"

export const Project=()=>{
    
    return (
        <div className={style.wrapper}>
            <h1 className={style.heading}>Купание гипопотама</h1>
            <HrApp className={classNames(style.hrColor,style.hrHeader)}/>
            <CaruselProject imgs={getData(12).map(v=>v.photos)} />
        </div>
    )
}