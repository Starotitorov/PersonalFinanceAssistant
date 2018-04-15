import { API_URL } from '../config';

export default {
  [`POST ${API_URL}/signin`]: ({ method, url, params, urlparams, headers }) => {
    const id = 1001;

    return {
      user: {
        id,
        name: `Artem Starotitorov`,
        email: `starotitorov1997@gmail.com`
      },
      token: 'token'
    };
  },
  [`POST ${API_URL}/signup`]: ({ method, url, params, urlparams, headers }) => {
    const id = 1001;

    return {
      user: {
        id,
        name: `User${id}`,
        email: `user${id}@example.com`
      },
      token: 'token'
    };
  },
  [`POST ${API_URL}/auth/facebook/callback`]: ({ method, url, params, urlparams, headers }) => {
    const id = 1001;

    return {
      user: {
        id,
        name: `User${id}`,
        email: `user${id}@example.com`
      },
      token: 'token'
    };
  },
  [`PUT ${API_URL}/changePassword`]: ({ method, url, params, urlparams, headers }) => {
    return {
      status: 200
    };
  }
};
