import { useState } from 'react';
import type IUsers from '../Types/IUsers';
import type { res } from '../Types/Tres';

export default function useUpdateUsers() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<res | null>(null);
  const [error, setError] = useState<Error | null>(null);
  async function updateUser(updatedData: IUsers, email: string) {
    setLoading(true);
    setResponse(null);
    setError(null);
    try {
      if (!navigator.onLine) {
        setError(new Error(`You are currently offline. Please check your connection.`));
        return;
      }

      const result = await fetch(`https://user-management-server-gamma-blond.vercel.app/users/update?email=${email}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      const backResponse: res = await result.json();

      if (!result.ok || !backResponse.updateSuccess) {
        setResponse(backResponse);
        throw new Error(backResponse?.message || `Request Failed With Status${result.status}`);
      }

      setResponse(backResponse);

      return true;
    } catch (error: any) {
      setError(error instanceof Error ? error : new Error('Something is wrong!!'));
      return false;
    } finally {
      setLoading(false);
    }
  }

  return { updateUser, loading, error, response };
}
