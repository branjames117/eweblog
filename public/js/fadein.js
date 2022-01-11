const blogPosts = [...document.querySelectorAll('.bullet')];

blogPosts.forEach((post, idx) => {
  setInterval(() => {
    post.style.opacity = '1';
  }, idx * 500);
});
