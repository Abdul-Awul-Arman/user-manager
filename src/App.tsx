import { useState } from "react";
import FormWithRef from "./components/formWithRef";
// import Form from "./components/form"
import Nav from "./components/nav";
import User from "./components/user";
type inputsData={
    id:number,
    name:string,
    email:string,
    registered:boolean
}
// const users:inputsData[] = [ ];
export default function App(){

    const [users,setUsers]=useState<inputsData[]>([])
    function handlerFunction(data:inputsData){
        let userData={
            ...data,
            id:users.length+1
        }
        setUsers((pre)=>{
            return [...pre,userData]
        })
      };
    return(
        <>
        <Nav></Nav>
        {
            users.map((user)=>{
               return <User name={user.name} email={user.email} isRegistered={user.registered} key={user.id} ></User>
            })
        }
        <FormWithRef valueForName="arman" valueForRegister={false} valueForEmail="xyz@gmail.com" handlerFunction={handlerFunction}></FormWithRef>
        {/* <Form valueForName="arman" valueForRegister={false} valueForEmail="xyz@gmail.com"></Form> */}
        
        </>
    )
}