import style from './listAvatar.module.scss';
import {FC, PropsWithChildren} from 'react';
import Avatar from '../UI/avatar/avatar';
import Img from '../UI/img/img';
import { PATH } from '@/constants/router';
import Link from '../UI/link/link';
import classNames from 'classnames';
interface Props extends PropsWithChildren<
React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> {
    avatars:{
        firstName: string;
        lastName: string;
        avatar: string;
        description?: string

    }[]
}
const ListAvatar: FC<Props> = (props) => {
const { avatars, className } = props;

const listAvatarCn=classNames(style.listAvatar,className)
return (
<div className={listAvatarCn} >
   {avatars.map(v=>{
   return <div className={style.alignment}>
    <Avatar type="img"> <Img type='avatar' src={v.avatar}/></Avatar>
    <p className={style.userName}><Link to={PATH.MAIN.USERS.USER}> {v.firstName+" " + v.lastName} </Link></p>

    {typeof v.description==="string"?<p className={classNames(style.description)}>{v.description}</p>:""}
    </div>
   })} 

</div>
);
};
export default ListAvatar;