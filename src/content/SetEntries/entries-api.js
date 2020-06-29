import request from '../../utils/request';

function getEntries(Usuario) {
  return request({
    url: '/SetEntries/Entry',
    method: 'GET',
    params: {
      Usuario,
    },
  });
}

function getEntry(EntradaId) {
  return request({
    url: `/SetEntries/Entry/${EntradaId}`,
    method: 'GET',
  });
}
function deleteEntrie(EntradaID) {
  return request({
    url: `/SetEntries/Entry/${EntradaID}`,
    method: 'DELETE',
  });
}

function deleteSetEntry(EntradaID) {
  return request({
    url: `/SetEntries/SetEntry/${EntradaID}`,
    method: 'DELETE',
  });
}

function updateSetEntry(payload, id) {
  return request({
    url: `/SetEntries/SetEntry/${id}`,
    method: 'PUT',
    data: payload,
  });
}

function createEntry(payload) {
  return request({
    url: '/SetEntries/Entry',
    method: 'POST',
    data: payload,
  });
}
function updateEntry(payload, EntradaId) {
  return request({
    url: `/SetEntries/Entry/${EntradaId}`,
    method: 'PUT',
    data: payload,
  });
}

function getSetEntries(Usuario) {
  return request({
    url: '/SetEntries/SetEntry',
    method: 'GET',
    params: {
      Usuario,
    },
  });
}

function creatSetEntry(payload) {
  return request({
    url: '/SetEntries/SetEntry',
    method: 'POST',
    data: payload,
  });
}
const EntriesAPI = {
  getEntries,
  deleteEntrie,
  createEntry,
  updateEntry,
  getEntry,
  getSetEntries,
  creatSetEntry,
  deleteSetEntry,
  updateSetEntry,
};

export default EntriesAPI;
