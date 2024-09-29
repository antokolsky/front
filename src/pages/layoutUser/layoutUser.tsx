import { PATH } from "@/constants/router"
import { NavLink, Outlet } from "react-router-dom"
import style from "./layoutUser.module.scss"

export const LayoutUser=()=>{
    return(
        <div className={style.wrapper}>
            <div className={style.listLink }>
                <NavLink to={PATH.MAIN.USERS.USER} className={({isActive})=>isActive?style.naveLinkActive:style.naveLinkNoActive} end={true}>Профиль</NavLink>
                <NavLink to={PATH.MAIN.USERS.PROJECTS.PROJECTS} className={({isActive})=>isActive?style.naveLinkActive:style.naveLinkNoActive}>Проекты</NavLink>
     
            </div>
            <Outlet/>
        </div>
  
    )
}