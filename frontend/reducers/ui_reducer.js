import { combineReducers } from 'redux';

import modal from './modal_reducer';
import modalProps from './modal_props_reducer';

export default combineReducers({
    modal,
    modalProps
});