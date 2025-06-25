import { useEffect, useState } from "react";
import Form from "./components/Form";
import Nav from "./components/Nav";
import User from "./components/User";
import type IUsers from "./Types/IUsers";
import fetchUser from "./utility/fetchUsers";
import type { TinputsData } from "./Types/TInputsData";
import createUser from "./utility/createUser";

export default function App(){

    const [isShow,setShow]=useState(false)
    const [users,setUsers]=useState<IUsers[]>([]);

    async function handlerFunction(oldEmail:string|undefined,data:TinputsData){
        try{

           await createUser(data);
          const res= await fetchUser();
          setUsers(res)

        }
        catch(error){
            console.log(error);
        }

     };

      function handleShow(){
        setShow((pre)=>!pre)
      };

      useEffect(()=>{
       
         fetchUser().then((data)=>setUsers(data));
        
      },[]);

    return(
        <>
        <Nav handleClick={handleShow}></Nav>
        {
            users.length&&users.map((user)=>{
               return <User name={user.name} email={user.email} _id={user._id} isRegistered={user.isRegistered} key={user._id} setUsers={setUsers} ></User>
            })
        }
        <Form forUpdate={false}   isShow={isShow} handlerFunction={handlerFunction} handleShow={handleShow}></Form>
       
        </>
    )
}