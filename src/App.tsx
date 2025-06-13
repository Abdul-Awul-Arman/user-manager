import Nav from "./components/nav";
import User from "./components/user";
const users = [
    { id: 1, name: "Abdul Awul Arman", email: "abdulawularman@gmail.com", isRegistered: false },
    { id: 2, name: "Fatima Rahman", email: "fatima.rahman@example.com", isRegistered: true },
    { id: 3, name: "Kamal Uddin", email: "kamal.uddin@example.com", isRegistered: false },
    { id: 4, name: "Salma Khatun", email: "salma.khatun@example.com", isRegistered: true },
    { id: 5, name: "Rafiq Islam", email: "rafiq.islam@example.com", isRegistered: false },
    { id: 6, name: "Nusrat Jahan", email: "nusrat.jahan@example.com", isRegistered: true },
    { id: 7, name: "Tanvir Ahmed", email: "tanvir.ahmed@example.com", isRegistered: false },
    { id: 8, name: "Lubna Chowdhury", email: "lubna.chowdhury@example.com", isRegistered: true },
    { id: 9, name: "Hasan Mahmud", email: "hasan.mahmud@example.com", isRegistered: false },
    { id: 10, name: "Rumana Akter", email: "rumana.akter@example.com", isRegistered: true }
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
        </>
    )
}