import React from 'react'
import { getUserPost } from '../libs/getUserPost'

const UserPosts = async({promise}) => {
   const posts = await promise;
   console.log(posts,"posts")
  return (
    <ul>
{posts.map((post) => (
    <li key={post.id}>
      <h2>{post.title}</h2>  
      <p>{post.body}</p>
        </li>
    
))}
    </ul>
  )
}
export default UserPosts