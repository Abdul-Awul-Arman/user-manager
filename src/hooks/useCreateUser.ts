import { useState } from 'react';
import type IUsers from '../Types/IUsers';
import type { res } from '../Types/Tres';



export default function useCreateUser() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<res|null>(null);
  const [error, setError] = useState<Error | null>(null);
  async function createUser(data: IUsers) {
    setLoading(true);
    setResponse(null);
    setError(null);
    try {
      if (!navigator.onLine) {
        setError(new Error(`You are currently offline. Please check your connection.`));
        return;
      }
      
      const result = await fetch('https://user-management-server-gamma-blond.vercel.app/users/create-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const serverResponse: res = await result.json();


      if(!result.ok || !serverResponse.createSuccess){
        setResponse(serverResponse)
        throw new Error(serverResponse?.message||`Request Failed With Status${result.status}`)
      }
      
      setResponse(serverResponse);
      return true;  

    } catch (error: any) {
      setError(error instanceof Error ? error : new Error('Something is wrong!!'));
      return false
    } finally {
      setLoading(false);
    }

  }

  return { createUser, loading, error, response };
}
