interface Error{
    data:unknown,
    status:number
}
export function guardError(error:unknown):error is Error{
return  typeof error==="object" && error!==null &&  "data" in error&&"status" in error?true:false
}