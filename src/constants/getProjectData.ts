import im from "@/assets/images/card.jpg"
import im2 from "@/assets/images/avatar.jpg"
import { Project } from "@/types/dto" 





export const getData=(carent:number):Project[]=>{
return  Array(carent).fill(null).map((_,i)=>{
    return {
        name:"Купание гипопотама",
        description:"Вусота  6 м",
        cost: "$ 15 000",
        photos:i%2==0?im:im2,
        owner:0
    }
})

}

export const getAuthors=(carent:number)=>{
    return Array(carent).fill(null).map((_,i)=>{
       return {
        firstName:"firstName",
        lastName:"lasteName",
        avatar:i%2==0?im:im2
    }
    })
}

 