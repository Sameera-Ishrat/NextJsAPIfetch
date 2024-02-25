import React from "react";

export const getUserPost = async (id) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000)
  })
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  if (!response.ok) {
    throw new Error("Couldn't find post");
  }
  return response.json();
};
