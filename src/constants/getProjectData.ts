import im from "@/assets/images/card.jpg"
import { Project } from "@/types/dto" 





export const getData=(carent:number):Project[]=>{
return  Array(carent).fill(null).map(()=>{
    return {
        name:"Купание гипопотама",
        description:"Вусота  6 м",
        cost: "$ 15 000",
        photos:im,
        owner:0
    }
})

}

 