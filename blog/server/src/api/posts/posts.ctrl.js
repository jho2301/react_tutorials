let postId = 1;

const posts = [
  {
    id: 1,
    title: '제목',
    body: '내용',
  },
];

exports.write = (context) => {
  const { title, body } = context.request.body;
  postId += 1;
  const newPost = { id: postId, title, body };
  posts.push(newPost);
  context.body = newPost;
};

exports.list = (context) => {
  context.body = posts;
};

exports.read = (context) => {
  const { id } = context.params;

  const post = posts.find((post) => post.id === parseInt(id));
  if (!post) {
    context.status = 404;
    context.body = {
      message: '포스트가 존재하지 않습니다.',
    };
    return;
  }
  context.body = post;
};

exports.remove = (context) => {
  const { id } = context.params;
  const index = posts.findIndex((post) => post.id === parseInt(id));
  if (index === -1) {
    context.status = 404;
    context.body = {
      message: '포스트가 존재하지 않습니다.',
    };
    return;
  }
  posts.splice(index, 1);
  context.status = 204;
};

exports.replace = (context) => {
  const { id } = context.params;
  const index = posts.findIndex((post) => post.id === parseInt(id));
  if (index === -1) {
    context.status = 404;
    context.body = {
      message: '포스트가 존재하지 않습니다.',
    };
    return;
  }
  posts[index] = {
    id,
    ...context.request.body,
  };
  context.body = posts[index];
};

exports.update = (context) => {
  const { id } = context.params;
  const index = posts.findIndex((post) => post.id === parseInt(id));
  if (index === -1) {
    context.status = 404;
    context.body = {
      message: '포스트가 존재하지 않습니다.',
    };
    return;
  }
  posts[index] = {
    ...posts[index],
    ...context.request.body,
  };
  context.body = posts[index];
};
