import axios from 'axios';

/**
 * Create an Axios Client with defaults
 */
const client = axios.create({
  baseURL: 'http://localhost:4000/api',
});

client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Request Wrapper with default success/error actions
 */
const request = (options) => {
  console.log('request');
  const onSuccess = (response) => {
    console.log('success');
    return response.data;
  };

  const onError = (error) => {
    console.log('error: ', error);
    return Promise.reject(error.response || error.message);
  };

  return client(options).then(onSuccess).catch(onError);
};

export default request;
