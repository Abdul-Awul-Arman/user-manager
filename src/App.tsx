import { useEffect, useState } from 'react';
import Form from './components/Form';
import Nav from './components/Nav';
import User from './components/User';
import useCreateUser from './hooks/useCreateUser';
import useGetUsers from './hooks/useGetUsers';
import type IUsers from './Types/IUsers';

export default function App() {
  const [isShow, setShow] = useState(false);
  const [users, setUsers] = useState<IUsers[]>([]);
  const { createUser, error } = useCreateUser();
  const { getUsers, getUsersResponse } = useGetUsers();

  async function fetchAndSetUsers() {
    const users = await getUsers();
    setUsers(users ?? []);
  }

  function handleShow() {
    setShow(true);
  }

  async function handlerFunction(data: IUsers): Promise<boolean> {
    const success = await createUser(data);
    if (success) {
      setShow(false);
      fetchAndSetUsers();

      return true;
    }

    setShow(true);
    return false;
  }

  useEffect(() => {
    fetchAndSetUsers();
  }, []);


  return (
    <>
      <Nav handleClick={handleShow}></Nav>
      {users.length ? (
        [...users].reverse().map((user) => {
          return (
            <User name={user.name} email={user.email} _id={user._id} isRegistered={user.isRegistered} key={user._id} fetchAndSetUsers={fetchAndSetUsers}></User>
          );
        })
      ) : (
        <h1 className="text-white block text-center">{getUsersResponse?.message}</h1>
      )}
      <Form setShow={setShow} error={error} forUpdate={false} isShow={isShow} handlerFunction={handlerFunction}></Form>
    </>
  );
}
