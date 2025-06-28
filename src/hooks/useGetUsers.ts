import { useState } from 'react';
import type IUsers from '../Types/IUsers';

type TgetUsersRes = {
  success:boolean,
  message:string,
  users:IUsers[]
};

export default function useGetUsers() {
  const [loading, setLoading] = useState(false);
  const [getUsersResponse, setGetUsersResponse] = useState<TgetUsersRes | null>();
  const [errorGetUsers, setErrorGetUsers] = useState<Error | null>(null);
  async function getUsers() {
    setErrorGetUsers(null);
    setLoading(false);
    setGetUsersResponse(null);
    try {
      if (!navigator.onLine) {
        setErrorGetUsers(new Error(`You are currently offline. Please check your connection.`));
        return;
      }
      const result = await fetch('http://localhost:4000/users');

      let status = result.status;

      const serverResponse: TgetUsersRes = await result.json();

      if (!result.ok || !serverResponse.success) {
        setGetUsersResponse(serverResponse);
        throw new Error(`${serverResponse.message} status code${status}`);
      }
      setGetUsersResponse(serverResponse);
      return serverResponse.users;
    } catch (error: any) {
        setErrorGetUsers(error instanceof Error ? error : new Error('Something is wrong'));
      return [];
    } finally {
      setLoading(false);
    }
  }

  return { loading, getUsersResponse, errorGetUsers, getUsers };
}
