import React from 'react'

interface User{
    id: number,
    name: string
    email: string
  }
  
export default async function UserTable() {
    const res =  await fetch("https://jsonplaceholder.typicode.com/users");
    const userData: User[] = await res.json();
    
  return (
    <>
    <table className='table table-bordered'>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {
        userData.map(user => <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>)
      }
    </tbody>
</table>
</>
  )
}
