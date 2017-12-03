import getAccounstMocks from './endpoints/accounts';
import getAuthorizationMocks from './endpoints/authorization';

const API_URL = 'http://dzianis.mooo.com:8090/api/v1';

export default {
    ...getAuthorizationMocks(API_URL),
    ...getAccounstMocks(API_URL)
}
