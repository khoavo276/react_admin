import { STATUS_CODE } from '@config/constants';
import { ERROR_MESSAGES } from '@config/messages';
import axios from 'axios';
import queryString from 'query-string';

import { getCredentials, revokeUser } from '@utils/cookie';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/admin/api/v1`,
  headers: {
    'Content-Type': 'application/json'
  },
  paramsSerializer: parameters => queryString.stringify(parameters)
});

api.interceptors.request.use(config => {
  const credentials = getCredentials();
  if (!!credentials) {
    config.headers.common['access-token'] = credentials.accessToken;
    config.headers.common['client'] = credentials.client;
    config.headers.common['uid'] = credentials.uid;
  }
  return config;
});

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const { response } = error;
    let errorResponse = {
      message: error.message
    };

    if (response) {
      if (response.status === STATUS_CODE.Unauthorized) {
        revokeUser();
      }

      let message = ERROR_MESSAGES.default;

      errorResponse = {
        status: response.status,
        message: response?.data?.error || message
      };
    }

    return Promise.reject(errorResponse);
  }
);

export default api;
