async function signupFormHandler(e) {
  e.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const confirm = document.querySelector('#confirm-signup').value.trim();

  if (!username) {
    document.querySelector('#username-signup').style.borderColor = 'red';
    errMessageEl.textContent = 'Username field must not be blank.';
    return;
  }

  if (username.length > 30) {
    document.querySelector('#username-signup').style.borderColor = 'red';
    errMessageEl.textContent =
      'Username cannot exceed 30 characters in length.';
    return;
  }

  if (!password) {
    document.querySelector('#password-signup').style.borderColor = 'red';
    errMessageEl.textContent = 'Password field must not be blank.';
    return;
  }

  if (password.length < 8) {
    document.querySelector('#password-signup').style.borderColor = 'red';
    errMessageEl.textContent =
      'Password must be at least 8 characters in length.';
    return;
  }

  if (!confirm) {
    document.querySelector('#confirm-signup').style.borderColor = 'red';
    errMessageEl.textContent = 'Confirm password field must not be blank.';
    return;
  }

  const matchPasswords = password === confirm;

  if (!matchPasswords) {
    document.querySelector('#confirm-signup').style.borderColor = 'red';
    errMessageEl.textContent =
      'Password and Confirm password fields do not match.';
    return;
  }

  if (username && matchPasswords) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({ username, password }),
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
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);

const errMessageEl = document.querySelector('#error-message');

document.querySelector('#username-signup').addEventListener('input', () => {
  document.querySelector('#username-signup').style.borderColor = '#ccc';
  errMessageEl.textContent = '';
});

document.querySelector('#password-signup').addEventListener('input', () => {
  document.querySelector('#password-signup').style.borderColor = '#ccc';
  errMessageEl.textContent = '';
});

document.querySelector('#confirm-signup').addEventListener('input', () => {
  document.querySelector('#confirm-signup').style.borderColor = '#ccc';
  errMessageEl.textContent = '';
});
