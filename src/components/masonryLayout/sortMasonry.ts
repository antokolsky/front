import { Project } from "@/types/dto";

export const sortMasonry=(data:Project[],cardsHeyght:number[],column:number)=>{
    
    const columns:Project[][]=Array(column).fill(null).map(()=>[])
    const sorted:number[] =Array(column).fill(0)

    const dateHeyght =  data.map((v,i)=>{

        return  {
            ...v,
        heyght:  cardsHeyght[i]
        }

    })
    
    dateHeyght.forEach((projectByHeyght,i)=>{
        let short:{
            index: number;
            heyght: number;
        }={heyght:sorted[0],index:0}
        
        sorted.forEach((columnHeyght,i)=>{
            if(short.heyght>columnHeyght){
                short={heyght:columnHeyght,index:i}
            }
        })

        
        sorted[short.index]+=projectByHeyght.heyght

        columns[short.index].push(data[i])

    })


    return columns
}