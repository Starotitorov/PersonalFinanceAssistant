import getAccounstMocks from './endpoints/accounts';
import getAuthorizationMocks from './endpoints/authorization';
import getCategoriesMocks from './endpoints/categories'

const API_URL = 'http://dzianis.mooo.com:8090/api/v1';

export default {
    ...getAuthorizationMocks(API_URL),
    ...getAccounstMocks(API_URL),
    ...getCategoriesMocks(API_URL)
}
