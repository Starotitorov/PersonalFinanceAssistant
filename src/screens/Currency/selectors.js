import { entries } from 'lodash'

export const getExchangeRates = ({
    currency: {
        rates
    }
}) => entries(rates);

export const isExchangeRatesFetching = ({
    currency: {
        fetching
    }
}) => fetching;
