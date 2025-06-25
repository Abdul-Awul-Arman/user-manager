import type IUsers from "../Types/IUsers";

export default  async function updateUser(email:string,updatedData:IUsers){
    
      try{
        const response=await fetch(`http://localhost:4000/user/update?email=${email}`,{
            method:"PATCH",
            headers: {
                "Content-Type": "application/json",
              },
              body:JSON.stringify(updatedData   )
          });
    
          const serverResponse=await response.json();
    
          return serverResponse;
      }catch(error){
        console.log(error)
      }
}   