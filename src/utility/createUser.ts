import type IUsers from "../Types/IUsers";

export default async function createUser(data:IUsers){
    const response=await fetch("http://localhost:4000/user/create-user",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)

    });

    let backResponse=await response.json()

    if(!backResponse.success){
        const errorMessage=backResponse.message;
        throw new Error(errorMessage);
    }

    return backResponse;
}