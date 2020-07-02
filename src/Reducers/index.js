import { combineReducers } from 'redux';
import currencyList from './CurrencyAction';

const allReducer = combineReducers({
    currencyList: currencyList,
});

export default allReducer;