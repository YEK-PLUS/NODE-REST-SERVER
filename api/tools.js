const axios = require('axios');

const instanceRequiestHandler = (config) => config;

const instanceResponseHandler = (response) => response.data;

const createInstance = (endPoint, key) => {
  const instance = axios.create({
    baseURL: endPoint,
    headers: {
      'content-type': 'application/json',
      authorization: `${key ? `Bearer ${key}` : null}`,
    },
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
  });
  instance.interceptors.request.use(instanceRequiestHandler);
  instance.interceptors.response.use(instanceResponseHandler);
  return instance;
};

module.exports.createInstance = createInstance;
