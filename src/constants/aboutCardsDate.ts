
import { icons } from "../assets/icons";

type icon = keyof typeof icons
export  const aboutCardsDate:{
    icon: icon;
    heading: string;
    about: string;
}[]=[
    {
        icon:"profile",
        heading:`Создайте личный профиль`,
        about:`Расскажите о себе. Для дальнейшего сотрудничества нам важно знать о Вас больше`
    },
    {
        icon:"ring",
        heading:`Расскажите о Вашем творчестве`,
        about:`Разместите в галерее Ваши работы для ознакомления с ними будущих покупателей`
  
    },
    {
        icon:"play",
        heading:`Демонстрация скульптуры`,
        about:`Расскажем о том как будем представлять Вашу работу посетителям галереи`
  
    },
    {
        icon:"book",
        heading:`Способы продвижения работы`,
        about:`Узнайте какими способами мы продвигаем работы наших партнеров`
  
    }
]