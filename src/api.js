import moment from 'moment';
import config from './config';
import { JWTStorage } from 'src/utils';
import { networkService } from 'src/services';

const { get, post, put, del } = networkService;
const API_URL = config.apiUrl;

export const signIn = (email, password) => post(
  `${API_URL}/signin`,
  {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  JSON.stringify({ email, password })
);

export const signUp = (userData) => post(
  `${API_URL}/signup`,
  {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  JSON.stringify({ user: userData })
);

export const logInFacebook = data => post(
  `${API_URL}/auth/facebook/callback`,
  {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  JSON.stringify(data)
);

export const fetchAccounts = async () => get(
  `${API_URL}/accounts`,
  {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: await JWTStorage.getToken()
  }
);

export const addAccount = async accountData => post(
  `${API_URL}/accounts`,
  {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: await JWTStorage.getToken()
  },
  JSON.stringify({ account: accountData })
);

export const getAccount = async id => get(
  `${API_URL}/accounts/${id}`,
  {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: await JWTStorage.getToken()
  }
);

export const updateAccount = async (id, accountData) => put(
  `${API_URL}/accounts/${id}`,
  {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: await JWTStorage.getToken()
  },
  JSON.stringify({ account: accountData })
);

export const removeAccount = async id => del(
  `${API_URL}/accounts/${id}`,
  {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: await JWTStorage.getToken()
  }
);

export const fetchCategories = async () => get(
  `${API_URL}/categories`,
  {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: await JWTStorage.getToken()
  }
);

export const getCategory = async id => get(
  `${API_URL}/categories/${id}`,
  {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: await JWTStorage.getToken()
  }
);

export const addCategory = async categoryData => post(
  `${API_URL}/categories`,
  {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: await JWTStorage.getToken()
  },
  JSON.stringify({ category: categoryData })
);

export const updateCategory = async (id, categoryData) => put(
  `${API_URL}/categories/${id}`,
  {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: await JWTStorage.getToken()
  },
  JSON.stringify({ category: categoryData })
);

export const removeCategory = async id => del(
  `${API_URL}/categories/${id}`,
  {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: await JWTStorage.getToken()
  }
);

export const addTransfer = async transferData => post(
  `${API_URL}/transfers`,
  {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: await JWTStorage.getToken()
  },
  JSON.stringify({ transfer: transferData })
);

export const fetchTransactions = async ({ accountId, fromDate, toDate }) => get(
  `${API_URL}/transactions`,
  {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: await JWTStorage.getToken()
  },
  {
    accountId,
    fromDate: moment(fromDate),
    toDate: moment(toDate)
  }
);

export const getTransaction = async id => get(
  `${API_URL}/transactions/${id}`,
  {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: await JWTStorage.getToken()
  }
);

export const addTransaction = async transactionData => post(
  `${API_URL}/transactions`,
  {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: await JWTStorage.getToken()
  },
  JSON.stringify({ transaction: transactionData })
);

export const updateTransaction = async (id, transactionData) => put(
  `${API_URL}/transactions/${id}`,
  {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: await JWTStorage.getToken()
  },
  JSON.stringify({ transaction: transactionData })
);

export const removeTransaction = async id => del(
  `${API_URL}/transactions/${id}`,
  {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: await JWTStorage.getToken()
  }
);

export const fetchExchangeRates = ({ q, date, endDate }) => get(
  `${config.currencyConverterApiUrl}/exchangeRates`,
  {},
  { q, date, endDate }
);

export const changePassword = async data => put(
  `${API_URL}/changePassword`,
  {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: await JWTStorage.getToken()
  },
  JSON.stringify(data)
);
