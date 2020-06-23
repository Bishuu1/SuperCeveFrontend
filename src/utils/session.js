const isLogin = () => {
  const user = window.sessionStorage.getItem('user');

  if (user) {
    return true;
  }

  return false;
};

export { isLogin };

// sessionStorage.setItem('user', JSON.stringify(user));
// sessionStorage.removeItem('user');
// sessionStorage.getItem('user');
// JSON.parse(user)
