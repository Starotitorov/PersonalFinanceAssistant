import { Platform } from 'react-native';

const facebookLoginBehaviour = Platform.OS === 'android' ? 'web_only' : 'web';

// TODO: fill the information
const DEVELOPERS = [
    {
        email: 'starotitorov1997@gmail.com',
        name: 'Artem Starotitorov'
    },

    // TODO: uncomment this lines
    // {
    //     name: 'Andrey Gayduk'
    // },

    {
        name: 'Denis Gridiushko'
    },
    {
        name: 'Valera Yalovchuk'
    },

    //TODO: remove this lines
    {
        name: 'Alexander Evdakov'
    }
];

export default {
    apiUrl: 'http://dzianis.mooo.com:8090/api/v1',
    developers: DEVELOPERS,
    facebookLoginBehaviour
}
