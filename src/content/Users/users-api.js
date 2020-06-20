import request from '../../utils/request';

function getUsers() {
  return request({
    url: '/Users',
    method: 'GET',
  });
}

function createUser(payload) {
  return request({
    url: '/Users',
    method: 'POST',
    data: payload,
  });
}

function getUser(id) {
  return request({
    url: `/Users/${id}`,
    method: 'GET',
  });
}

function updateUser(id, payload) {
  return request({
    url: `/Users/${id}`,
    method: 'PUT',
    data: payload,
  });
}

function deleteUser(id) {
  return request({
    url: `/Users/${id}`,
    method: 'DELETE',
  });
}

const UsersAPI = {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
};

export default UsersAPI;
