async function editFormHandler(e) {
  e.preventDefault();

  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const title = document.querySelector('input[name="post-title"]').value;
  const content = document.querySelector('textarea[name="post-content"]').value;

  const response = await fetch(`/api/posts/${post_id}`, {
    method: 'PUT',
    body: JSON.stringify({ title, content }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dash');
  } else {
    alert(response.statusText);
  }
}

const canEditPost = document.querySelector('.edit-post-form');

if (canEditPost) {
  canEditPost.addEventListener('submit', editFormHandler);
}
