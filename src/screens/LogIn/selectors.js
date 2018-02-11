export const getCurrentUser = ({
    authorization: {
        user
    }
}) => user;

export const isUserFetching = ({
    authorization: {
        fetching
    }
}) => fetching;
