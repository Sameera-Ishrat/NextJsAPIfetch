import React from 'react'

export const getUsers = async() => {
const response = await fetch("https://jsonplaceholder.typicode.com/users");
if(!response.ok){
throw new Error ("Couldn't get users");
}
return response.json();
 
}

