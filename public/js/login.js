async function loginFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (!username) {
    document.querySelector('#username-login').style.borderColor = 'red';
    errMessageEl.textContent = 'Username field must not be blank.';
    return;
  }

  if (!password) {
    document.querySelector('#password-login').style.borderColor = 'red';
    errMessageEl.textContent = 'Password field must not be blank.';
    return;
  }

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dash');
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

const errMessageEl = document.querySelector('#error-message');

document.querySelector('#username-login').addEventListener('input', () => {
  document.querySelector('#username-login').style.borderColor = '#ccc';
  errMessageEl.textContent = '';
});

document.querySelector('#password-login').addEventListener('input', () => {
  document.querySelector('#password-login').style.borderColor = '#ccc';
  errMessageEl.textContent = '';
});
