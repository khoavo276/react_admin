import { convertTimestampToDate } from '@utils/date';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export function getCredentials() {
  return cookies.get('credentials');
}

export function setCredentials(credentials) {
  const { expiry } = credentials;
  cookies.set('credentials', credentials, {
    path: '/',
    expires: convertTimestampToDate(expiry)
  });
}

export function isAuthenticated() {
  const credentials = getCredentials();
  return !!credentials;
}

export function revokeUser() {
  const options = {
    path: '/'
  };
  cookies.remove('credentials', options);
}
