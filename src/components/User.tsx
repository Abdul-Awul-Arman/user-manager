import { useState } from 'react';
import type IUsers from '../Types/IUsers';
import useDeleteUsers from '../hooks/useDeleteUser';
import useUpdateUsers from '../hooks/useUpdateUsers';
import Form from './Form';
type User = {
  _id?: string;
  name: string;
  email: string;
  isRegistered: boolean;
  fetchAndSetUsers: () => void;
};

export default function User({ name, email, isRegistered, fetchAndSetUsers }: User) {
  const [isShow, setShow] = useState(false);
  const { updateUser, error } = useUpdateUsers();
  const { deleteUser } = useDeleteUsers();

  async function handlerFunction(data: IUsers): Promise<boolean> {
    const success = await updateUser(data, email);

    if (success) {
      fetchAndSetUsers();
      setShow(false)
      return true;
    }
    setShow(true);
    return false;
  }

  function handleShow() {
    setShow(true);
  }

  async function handleDelete() {
    const success = await deleteUser(email);
    if (success) {
      fetchAndSetUsers();
    }
  }

  const active: React.JSX.Element = <button className="bg-white text-[#030712] px-5 py-1 rounded-md ">Active</button>;
  const pending: React.JSX.Element = <button className="bg-red-500 text-white px-5 py-1 rounded-md ">Pending</button>;

  return (
    <div className="text-white w-[750px] m-auto ring rounded-md p-5 flex  justify-between  mb-5">
      <div>
        <p className="text-[30px] uppercase">{name}</p>
        <p className="text-[30px] font-mono">{email}</p>

        {isRegistered ? active : pending}
      </div>
      <div className="flex  flex-col gap-3 justify-center align-middle mr-15 ">
        <button
          onClick={handleShow}
          className="cursor-pointer transform transition duration-300 hover:scale-105 bg-white text-[#030712] rounded-md px-6 py-1 text-2xl"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="cursor-pointer transform transition duration-300 hover:scale-105 bg-white text-[#030712] rounded-md px-6 py-1 text-2xl"
        >
          Delete
        </button>
      </div>
      <Form
        error={error}
        forUpdate={true}
        valueForName={name}
        valueForEmail={email}
        valueForRegister={isRegistered}
        isShow={isShow}
        setShow={setShow}
        handlerFunction={handlerFunction}
      ></Form>
    </div>
  );
}
