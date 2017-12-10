import accountsMocks from './endpoints/accounts';
import authorizationMocks from './endpoints/authorization';
import categoriesMocks from './endpoints/categories';
import transfersMocks from './endpoints/transfers';
import transactionsMocks from './endpoints/transactions';

export default {
    ...accountsMocks,
    ...authorizationMocks,
    ...categoriesMocks,
    ...transfersMocks,
    ...transactionsMocks
}
