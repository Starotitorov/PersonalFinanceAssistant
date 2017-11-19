import { AppRouter } from 'src/screens/AppNavigator';

const initialState = AppRouter.getStateForAction(AppRouter.getActionForPathAndParams('LogIn'));

const navigation = (state = initialState, action) => {
    const nextState = AppRouter.getStateForAction(action, state);

    return nextState || state;
};

export default navigation;
