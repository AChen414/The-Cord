import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors_reducer';
import serverErrorsReducer from './server_error_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    server: serverErrorsReducer
});

export default errorsReducer;