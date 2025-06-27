import { useEffect, useState } from 'react';
import Form from './components/Form';
import Nav from './components/Nav';
import User from './components/User';
import fetchUser from './hooks/fetchUsers';
import  useCreateUser from './hooks/useCreateUser';
import type IUsers from './Types/IUsers';

export default function App() {
  const [isShow, setShow] = useState(false);
  const [users, setUsers] = useState<IUsers[]>([]);
  const { createUser,error } = useCreateUser();
  

  function handleShow() {
    setShow(true);
  }

  async function handlerFunction(data: IUsers){
   const success= await createUser(data);
   if(success){

       setShow(false)
       return;
    }
 
   setShow(true)
   
  }

  useEffect(() => {
    fetchUser().then((data) => setUsers(data));
  }, []);

  return (
    <>
      <Nav handleClick={handleShow}></Nav>
      {users.length &&
        [...users].reverse().map((user) => {
          return <User name={user.name} email={user.email} _id={user._id} isRegistered={user.isRegistered} key={user._id} setUsers={setUsers}></User>;
        })}
      <Form setShow={setShow} error={error}  forUpdate={false} isShow={isShow} handlerFunction={handlerFunction} ></Form>
    </>
  );
}
