import { API_URL } from '../config';

export default {
  [`GET ${API_URL}/categories`]: ({ method, url, params, urlparams, headers }) => {
    return {
      categories: [
        {
          categoryTypeId: 0,
          icon: 'cash',
          id: 0,
          name: 'Salary',
          userId: 0
        },
        {
          categoryTypeId: 1,
          icon: 'food',
          id: 1,
          name: 'Food',
          userId: 0
        },
        {
          categoryTypeId: 1,
          icon: 'cat',
          id: 2,
          name: 'C.A.T.',
          userId: 0
        }
      ]
    };
  },
  [`GET ${API_URL}/categories/{id}`]: ({ method, url, params, urlparams, headers }) => {
    return {
      category: {
        categoryTypeId: 0,
        icon: 'cat',
        id: 2,
        name: 'C.A.T.',
        userId: 0
      }
    };
  },
  [`POST ${API_URL}/categories`]: ({ method, url, params, urlparams, headers }) => {
    const { icon, name, categoryTypeId } = params.category;

    return {
      category: {
        id: 10001,
        icon,
        name,
        categoryTypeId
      }
    };
  },
  [`PUT ${API_URL}/categories/{id}`]: ({ method, url, params, urlparams, headers }) => {
    const { id } = urlparams;
    const { icon, name, categoryTypeId } = params.category;

    return {
      category: {
        id,
        icon,
        name,
        categoryTypeId
      }
    };
  },
  [`DELETE ${API_URL}/categories/{id}`]: ({ method, url, params, urlparams, headers }) => {
    return {
      status: 200
    };
  }
};
