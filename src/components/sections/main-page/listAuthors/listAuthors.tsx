import HrApp from '@/components/UI/hr/hr';
import style from './listAuthors.module.scss';
import ListAvatar from "@/components/listAvatar/listAvatar"
import Link from '@/components/UI/link/link';
import { getAuthors } from '@/constants/getProjectData';
import { PATH } from '@/constants/router';
const ListAuthors = () => {
return (
    <div className={style.darkBackground}>
        <div className={style.contaner}>
        <div className={style.listAuthors} >
            <div className={style.info}>
                <h1 className={style.siteName}>АНТОЛЬСКИЙ</h1>
                <h1 className={style.authorsName}>АВТОРЫ</h1>
                <Link className={style.linkAuthors} to={PATH.MAIN.USERS.USERS}>Смотреть всех участников</Link>
            </div>
            <ListAvatar avatars={getAuthors(3)} />
        </div>
            <HrApp className={style.hrSand}/>
            </div>
</div>
);
};
export default ListAuthors; 