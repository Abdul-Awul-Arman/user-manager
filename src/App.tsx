import { useState } from "react";
import FormWithRef from "./components/FormWithRef";
// import Form from "./components/form"
import Nav from "./components/Nav";
import User from "./components/User";
type inputsData={
    id?:number,
    name:string,
    email:string,
    register:boolean
}
const users:inputsData[] = [ ];
export default function App(){

    const [isShow,setShow]=useState(false)
    function handlerFunction(data:inputsData,){
        let userData={
            ...data,
            id:users.length+1
        }
        users.push(userData)

       
      };

      function handleShow(){
        setShow((pre)=>!pre)
      }

    return(
        <>
        <Nav handleClick={handleShow}></Nav>
        {
            users.map((user)=>{
               return <User name={user.name} email={user.email} id={user.id} isRegistered={user.register} key={user.id}  ></User>
            })
        }
        <FormWithRef forUpdate={false}   isShow={isShow} handlerFunction={handlerFunction} handleShow={handleShow}></FormWithRef>
        {/* <Form valueForName="arman" valueForRegister={false} valueForEmail="xyz@gmail.com"></Form> */}
        
        </>
    )
}