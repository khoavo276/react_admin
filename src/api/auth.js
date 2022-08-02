import { invert } from 'lodash';
import { mapDataFromObject } from '@utils/main';
import { CREDENTIALS_MAPPER } from '@api/mapper';
import { API_PATHS } from '@config/api-paths';
import api from './api';

const signIn = data => {
  return api
    .post(API_PATHS.signIn, data)
    .then(response => {
      const mapper = invert(CREDENTIALS_MAPPER);
      const credentials = mapDataFromObject(response.headers, mapper);

      return Promise.resolve(credentials);
    })
    .catch(error => Promise.reject(error.message));
};

const signOut = () => {
  return api
    .delete(API_PATHS.signOut)
    .catch(error => Promise.reject(error.message));
};

export { signIn, signOut };
