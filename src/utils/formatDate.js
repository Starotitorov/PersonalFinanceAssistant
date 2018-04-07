import moment from 'moment'

const formatDate = value => moment(value).format('MM/DD/YYYY');

export default formatDate;
