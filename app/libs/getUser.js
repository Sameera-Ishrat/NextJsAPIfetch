import React from 'react'

export const getUser = async(id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  if(!response.ok) {
    throw new Error("couldn't get user details");
  }
  return response.json();
    
}
