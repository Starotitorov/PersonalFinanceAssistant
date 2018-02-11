import moment from 'moment';
import { chain, values } from 'lodash';
import * as categoryTypes from 'src/constants/categoryTypes';

const getTransactionsList = (transactionsById, categoriesById) => {
    return chain(values(transactionsById))
        .map(transaction => {
            const category = categoriesById[transaction.categoryId];

            if (!category) {
                return null;
            }

            const { categoryTypeId } = category;

            return {
                ...transaction,
                date: moment(transaction.date),
                categoryTypeId,
                value: (categoryTypeId === categoryTypes.INCOME_CATEGORY
                    ? 1 : -1) * transaction.value
            }
        })
        .compact()
        .value();
};

export default getTransactionsList;
