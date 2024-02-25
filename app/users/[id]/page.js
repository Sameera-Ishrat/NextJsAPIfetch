import React from "react";
import { getUser } from "@/app/libs/getUser";
import Link from "next/link";
import { getUserPost } from "@/app/libs/getUserPost";
import { Suspense } from "react";
import UserPosts from "@/app/components/UserPosts";
// const UserPosts = React.lazy(() => import("@/app/components/UserPosts"));

const User = async ({ params: { id } }) => {
  //initial both requests in parallel
  const userData = await getUser(id);
  const userPost = await getUserPost(id);

  const user = await userData;

  return (
    <div className=" text-center mt-10">
        <h1 className="text-5xl font-bold">User Information</h1>
            <p className="text-3xl mt-10">{user.name}</p>
            <Suspense fallback={<p className="text-center text-5xl">Loading...</p>}>
          <UserPosts promise={userPost} />
        </Suspense>
    </div>
  );
};

export default User;
