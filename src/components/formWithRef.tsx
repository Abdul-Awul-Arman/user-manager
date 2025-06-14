import { useRef, useState } from "react";
type props={
    valueForName?:string,
    valueForEmail?:string,
    valueForRegister?:boolean,
    handlerFunction?:Function,
    handleShow:Function,
    isShow:boolean
}
type inputsData={
    name?:string,
    email?:string,
    register?:boolean
}

export default function From({valueForName,valueForEmail,valueForRegister,handlerFunction,handleShow,isShow}:props){

    const [inputsData,setInputsData]=useState<inputsData>({
        name:valueForName || "",
        email:valueForEmail ||"",
        register:valueForRegister||false
    });

    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const registerRef = useRef<HTMLInputElement>(null);
    
     function handleSubmit(){
        let data={
            name:nameRef.current?.value,
            email:emailRef.current?.value,
            register:registerRef.current?.checked
        };
        
     handlerFunction(data)
     console.log(data)

     handleShow()

     setInputsData({
        name:"",
        email:"",
        register:false
     })
      

    };

    
  const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name,type,checked,value}=e.target;
    setInputsData((pre)=>({
      ...pre,
      [name]:type==="checkbox"?checked:value
    }))
  };

  
    return(

        <div className={` bg-white/40 ${isShow?"fixed" :"hidden"}   text-white m-auto  flex flex-col rounded-md   inset-0 "`}>
            <div className=" m-auto p-5 bg-black w-[750px] flex justify-center items-center flex-col rounded-md  " >

        <label htmlFor="name" className="block mt-4">Name
            <input
            ref={nameRef}
            required={true}
            type="text"
            name="name" 
            onChange={handleOnChange}
            value={inputsData.name}
             className="ml-2 w-[400px] ring p-2 rounded-sm " />
             </label>


        <label htmlFor="email" className="block mt-4 mb-4">Email
            <input 
            ref={emailRef}
            type="email"
            name="email" 
            required={true}
            onChange={handleOnChange}
            value={inputsData.email}
            className="ml-2 w-[400px]  ring p-2 rounded-sm" />
            

            </label>
        <label htmlFor="register" className="flex items-center gap-2">Mark as registered
             <input 
             ref={registerRef}
             type="checkbox"
             name="register" 
             onChange={handleOnChange}
             checked={inputsData.register} 
             className=" w-5 h-4 accent-blue-600 rounded border-gray-300" />
             </label>
             <button onClick={handleSubmit}  className="my-3  cursor-pointer transform transition duration-300 hover:scale-105 bg-white text-[#030712] rounded-md px-2  text-2xl">Submit</button>
             </div>
             </div>
        
    )
}