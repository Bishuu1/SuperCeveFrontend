import request from '../../utils/request';

function login(payload) {
  return request({
    url: '/login',
    method: 'POST',
    data: payload,
  });
}

const LoginAPI = {
  login,
};

export default LoginAPI;
