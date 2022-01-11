async function newFormHandler(e) {
  e.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value.trim();
  const content = document
    .querySelector('textarea[name="post-content"]')
    .value.trim();

  const titleTooLong = title.length > 255;
  const errorMessageEl = document.querySelector('.error-text');

  if (titleTooLong) {
    errorMessageEl.textContent =
      'Title cannot be longer than 255 characters. Please hire an editor.';
    return;
  }

  if (!title) {
    errorMessageEl.textContent = 'Title field cannot be empty.';
    return;
  }

  if (!content) {
    errorMessageEl.textContent = 'Content field cannot be empty.';
    return;
  }

  if (title && content) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        content,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);

const titleCounterEl = document.querySelector('#title-counter > span');
const contentCounterEl = document.querySelector('#content-counter > span');

document.querySelector('#post-title').addEventListener('input', () => {
  titleCounterEl.textContent = `${
    document.querySelector('#post-title').value.length
  }`;
});

document.querySelector('#post-content').addEventListener('input', () => {
  contentCounterEl.textContent = `${
    document.querySelector('#post-content').value.length
  }`;
});
