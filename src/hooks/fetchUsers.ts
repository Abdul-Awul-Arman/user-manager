import type IUsers from '../Types/IUsers';

export default async function fetchUsers() {
  const response = await fetch('http://localhost:4000/users');
  return  response.json();
}
