import im from "@/assets/images/card.jpg"
import im2 from "@/assets/images/avatar.jpg"
import { Project } from "@/types/dto" 


export const getRandomImgs=()=>{
    const imgs=[
        "https://antokolsky.github.io/front_landing/photo/1/1.jpg",
        "https://antokolsky.github.io/front_landing/photo/1/2.jpg",
        "https://antokolsky.github.io/front_landing/photo/1/3.jpg",
        "https://antokolsky.github.io/front_landing/photo/1/4.jpg",

        "https://antokolsky.github.io/front_landing/photo/2/1.jpg",
        "https://antokolsky.github.io/front_landing/photo/2/2.jpg",
        "https://antokolsky.github.io/front_landing/photo/2/3.jpg",

        "https://antokolsky.github.io/front_landing/photo/3/1.jpg",
        "https://antokolsky.github.io/front_landing/photo/3/2.jpg",
        "https://antokolsky.github.io/front_landing/photo/3/3.jpg",

        "https://antokolsky.github.io/front_landing/photo/4/1.jpg",
        "https://antokolsky.github.io/front_landing/photo/4/2.jpg",
        "https://antokolsky.github.io/front_landing/photo/4/3.jpg",
        "https://antokolsky.github.io/front_landing/photo/4/4.jpg",
        "https://antokolsky.github.io/front_landing/photo/4/5.jpg",
        "https://antokolsky.github.io/front_landing/photo/4/6.jpg",

        "https://antokolsky.github.io/front_landing/photo/5/1.jpg",
        "https://antokolsky.github.io/front_landing/photo/5/2.jpg",
        "https://antokolsky.github.io/front_landing/photo/5/3.jpg",
        "https://antokolsky.github.io/front_landing/photo/5/4.jpg",
        "https://antokolsky.github.io/front_landing/photo/5/5.jpg",
        "https://antokolsky.github.io/front_landing/photo/5/6.jpg",

        "https://antokolsky.github.io/front_landing/photo/6/1.jpg",
        "https://antokolsky.github.io/front_landing/photo/6/2.jpg",
        "https://antokolsky.github.io/front_landing/photo/6/3.jpg",
        "https://antokolsky.github.io/front_landing/photo/6/4.jpg",

        "https://antokolsky.github.io/front_landing/photo/7/1.jpg",
        "https://antokolsky.github.io/front_landing/photo/7/2.jpg",
        "https://antokolsky.github.io/front_landing/photo/7/3.jpg",
        "https://antokolsky.github.io/front_landing/photo/7/4.jpg",
        "https://antokolsky.github.io/front_landing/photo/7/5.jpg",
        "https://antokolsky.github.io/front_landing/photo/7/6.jpg",
        "https://antokolsky.github.io/front_landing/photo/7/7.jpg",

        "https://antokolsky.github.io/front_landing/photo/8/1.jpg",
        "https://antokolsky.github.io/front_landing/photo/8/2.jpg",
    ]
    return imgs[Math.floor(Math.random()*imgs.length)]
}


export const getData=(carent:number):Project[]=>{
return  Array(carent).fill(null).map(()=>{
    return {
        name:"Купание гипопотама",
        description:"Вусота  6 м",
        cost: "$ 15 000",
        photos:getRandomImgs(),
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

 