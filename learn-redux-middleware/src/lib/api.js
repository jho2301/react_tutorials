export const getPost = (id) =>
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

export const getUser = (id) =>
  fetch(`https://jsonplaceholder.typicode.com/users`);
