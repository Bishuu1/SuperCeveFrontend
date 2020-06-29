import request from '../../utils/request';

function getTemplates() {
  return request({
    url: '/Template',
    method: 'GET',
  });
}

function createTemplate(payload) {
  return request({
    url: '/Template',
    method: 'POST',
    data: payload,
  });
}

function getTemplate(id) {
  return request({
    url: `/Template/${id}`,
    method: 'GET',
  });
}

function updateTemplate(id, payload) {
  return request({
    url: `/Template/${id}`,
    method: 'PUT',
    data: payload,
  });
}

function deleteTemplate(id) {
  return request({
    url: `/Template/${id}`,
    method: 'DELETE',
  });
}

const PlantillasAPI = {
  getTemplate,
  createTemplate,
  getTemplate,
  updateTemplate,
  deleteTemplate,
};

export default PlantillasAPI;