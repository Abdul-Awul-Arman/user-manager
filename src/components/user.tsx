import { useState } from "react"
import Form from "./Form"
import type IUsers from "../Types/IUsers"
import type { TinputsData } from "../Types/TInputsData"
import updateUser from "../utility/updateUser"
import fetchUsers from "../utility/fetchUsers"
type User={
_id?:string,
  name:string,
  email:string,
  isRegistered:boolean,
  setUsers:React.Dispatch<React.SetStateAction<IUsers[]>>
}



export default function User({_id,name,email,isRegistered,setUsers}:User){
    const [isShow,setShow]=useState(false)
    const [message,setMessage]=useState(false)

    function handleShow(){
        setShow(true)
      }

      async function handlerFunction(oldEmail:string,data:TinputsData){
        try{

            const response=await updateUser(oldEmail,data);
            console.log(response)
            if(!response.updateSuccess){
                setMessage(true)
                setShow(true)
                
                return;
            }

            setMessage(false);
            setShow(false)
            
            const users=await fetchUsers();
            setUsers(users);
        }catch(error){
            console.log(error)
        }
        
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
            <Form emailValidation={message} forUpdate={true} valueForName={name} valueForEmail={email} valueForRegister={isRegistered} isShow={isShow} handleShow={handleShow} handlerFunction={handlerFunction}></Form>
        </div>
    )
}