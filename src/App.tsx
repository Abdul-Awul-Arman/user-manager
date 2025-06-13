import From from "./components/form";
import Nav from "./components/nav";
import User from "./components/user";
const users = [
    { id: 1, name: "Abdul Awul Arman", email: "abdulawularman@gmail.com", isRegistered: false },
   
  ];
  
  

export default function App(){
    return(
        <>
        <Nav></Nav>
        {
            users.map((user)=>{
               return <User name={user.name} email={user.email} isRegistered={user.isRegistered} key={user.id} ></User>
            })
        }
        <From valueForName="arman" valueForRegister={false} valueForEmail="xyz@gmail.com"></From>
     
        </>
    )
}