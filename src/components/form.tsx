import { useState } from "react";
type formValues={
    valueForName?:string,
    valueForEmail?:string,
    valueForRegister?:boolean
}

export default function From({valueForName,valueForEmail,valueForRegister}:formValues){

   let validiton=useState(true)

    const [inputsData,setInputsData]=useState({
        name:valueForName || "",
        email:valueForEmail ||"",
        register:valueForRegister||false
    })
    
     function handelSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        let formData=new FormData(e.currentTarget)



        let data={
            name:formData.get("name"),
            email:formData.get("email"),
            register:formData.get("register")==='on'
        };
        console.log(data)
        console.log(inputsData);
    };

    
     

    //  function handleOnchange(e:React.ChangeEvent<HTMLInputElement>){

    //     setInputsData((pre)=>{
    //       return(
    //         {
    //             ...pre,
    //             [e.target.name]:e.target.value
                
    //         }
    //       )
    //     })

    //  }

    
  const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setInputsData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };



    return(
        <div className="bg-[#1E2939] text-white m-auto w-[750px] flex flex-col rounded-md  ">
            <form className="w-[400px] m-auto  "  onSubmit={handelSubmit}>

        <label htmlFor="name" className="block mt-4">Name
            <input
             type="text"
             name="name" 
             onChange={handleOnChange}
            value={inputsData.name}
             className=" w-[400px] ring p-2 rounded-sm " />
             </label>


        <label htmlFor="email" className="block mt-4 mb-4">Email
            <input 
            type="email"
            name="email" 
            onChange={handleOnChange}
            value={inputsData.email}
            className=" w-[400px]  ring p-2 rounded-sm" />
            

            </label>
        <label htmlFor="register" className="flex  items-center gap-2">Mark as registered
             <input 
             type="checkbox"
             name="register" 
             onChange={handleOnChange}
             defaultChecked={inputsData.register} 
             className=" w-5 h-4 accent-blue-600 rounded border-gray-300" />
             </label>
             <button   className="my-3  cursor-pointer transform transition duration-300 hover:scale-105 bg-white text-[#030712] rounded-md px-2  text-2xl">Submit</button>
             </form>
        </div>
    )
}