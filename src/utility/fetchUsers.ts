import type IUsers from "../Types/IUsers";

export default async function fetchUsers(){
 
            const response=await fetch("http://localhost:4000/user");
        
            const data:IUsers[]= await response.json();
            
        
            return data;
        };
