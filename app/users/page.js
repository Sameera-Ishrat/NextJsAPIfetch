import React from "react";
import Link from "next/link";
import { getUsers } from "../libs/getUsers";


const Users = async () => {
  const users = await getUsers();
  console.log(users);
  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold">Users</h1>
      <Link href="/">Home</Link>
      {users.map((user) => (
        <div key={user.id}>
          {" "}
          <Link href={`/users/${user.id}`}>{user.name}</Link>{" "}
        </div>
      ))}
    </div>
  );
};

export default Users;
