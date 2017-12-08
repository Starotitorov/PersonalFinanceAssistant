export default function getCategoriesMocks(API_URL) {
    return {
        [`GET ${API_URL}/categories`]: ({method, url, params, urlparams, headers}) => {
            return {
                categories: [
                    {
                        categoryType: 0,
                        icon: 'cash',
                        id: 0,
                        name: 'Salary',
                        userId: 0
                    },
                    {
                        categoryType: 1,
                        icon: 'food',
                        id: 1,
                        name: 'Food',
                        userId: 0
                    },
                    {
                        categoryType: 0,
                        icon: 'cat',
                        id: 2,
                        name: 'C.A.T.',
                        userId: 0
                    }
                ]
            };
        },
        [`POST ${API_URL}/categories`]: ({method, url, params, urlparams, headers}) => {
            const {icon, name, categoryType} = params.category;

            return {
                account: {
                    id: 10001,
                    icon,
                    name,
                    categoryType
                }
            };
        },
    }
}
