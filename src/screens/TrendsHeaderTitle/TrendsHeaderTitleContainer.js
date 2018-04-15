import { connect } from 'react-redux';
import { getSelectInputOptionsFromAllAccounts } from './selectors';
import TrendsHeaderTitle from './TrendsHeaderTitle';
import { getSelectedAccountId } from '../Trends/selectors';
import { setSelectedAccount } from '../Trends/actions';

const mapStateToProps = state => ({
  accountOptions: getSelectInputOptionsFromAllAccounts(state),
  selectedAccountId: getSelectedAccountId(state)
});

export default connect(mapStateToProps, { setSelectedAccount })(TrendsHeaderTitle);
