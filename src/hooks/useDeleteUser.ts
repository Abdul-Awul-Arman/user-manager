import { useState } from 'react';

import type { res } from '../Types/Tres';

export default function useDeleteUsers() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<res | null>(null);
  const [deleteError, setDeleteError] = useState<Error | null>(null);
  async function deleteUser( email: string) {
    setLoading(true);
    setResponse(null);
    setDeleteError(null);
    try {
      if (!navigator.onLine) {
        setDeleteError(new Error(`You are currently offline. Please check your connection.`));
        return;
      }
     

      const result = await fetch(`https://user-management-server-gamma-blond.vercel.app/users/delete?email=${email}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const serverResponse: res = await result.json();
    

      if (!result.ok || !serverResponse.deleteSuccess) {
        setResponse(serverResponse);
        console.log(serverResponse);
        throw new Error(serverResponse?.message || `Request Failed With Status${result.status}`);
      }

      setResponse(serverResponse);
     
      return true;
    } catch (error: any) {
      setDeleteError(error instanceof Error ? error : new Error('Something is wrong!!'));
      return false;
    } finally {
      setLoading(false);
    }
  }

  return { deleteUser, loading, deleteError, response };
}
