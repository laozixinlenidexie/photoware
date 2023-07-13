import mockrequests from "@/api/mockrequest";

export const mockreq= () =>{
    return mockrequests({
        url:'/image',
        method:'get',
    })
}