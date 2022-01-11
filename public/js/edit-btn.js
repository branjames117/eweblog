const canEditPostBtn = document.querySelector('#edit-post-btn');

if (canEditPostBtn) {
  document.querySelector('#edit-post-btn').addEventListener('click', () => {
    const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    document.location.replace(`/dash/edit/${post_id}`);
  });
}
