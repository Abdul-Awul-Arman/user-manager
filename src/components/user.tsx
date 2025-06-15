import { useState } from "react"
import FormWithRef from "./FormWithRef"
type user={
    id?:number,
  name:string,
  email:string,
  isRegistered:boolean,
}

type inputsData={
    id?:number,
    name:string,
    email:string,
    register:boolean
}


export default function User({id,name,email,isRegistered}:user){
    const [isShow,setShow]=useState(false)

    function handleShow(){
        setShow((pre)=>!pre)
      }

      function handlerFunction(data:inputsData,){
        let userData={
            id,
            ...data
        }

        console.log(userData);
        
      };
   
    const active:React.JSX.Element= <button className="bg-white text-[#030712] px-5 py-1 rounded-md ">Active</button>
    const pending:React.JSX.Element= <button className="bg-red-500 text-white px-5 py-1 rounded-md ">Pending</button>
    
    return(
        <div className="text-white w-[750px] m-auto ring rounded-md p-5 flex  justify-between  mb-5">
            <div>
            <p className="text-[30px] uppercase">{name}</p>
            <p className="text-[30px] font-mono">{email}</p>
           
            {
                isRegistered ? active : pending
            }
            
            </div >
            <div className="flex  flex-col gap-3 justify-center align-middle mr-15 ">
            <button onClick={handleShow}  className="cursor-pointer transform transition duration-300 hover:scale-105 bg-white text-[#030712] rounded-md px-6 py-1 text-2xl">Edit</button>
            <button   className="cursor-pointer transform transition duration-300 hover:scale-105 bg-white text-[#030712] rounded-md px-6 py-1 text-2xl">Delete</button>
            </div>
            <FormWithRef forUpdate={true} valueForName={name} valueForEmail={email} valueForRegister={isRegistered} isShow={isShow} handleShow={handleShow} handlerFunction={handlerFunction}></FormWithRef>
        </div>
    )
}